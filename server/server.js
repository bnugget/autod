import express from "express";
import cors from "cors";
import { createReadStream, promises as fs } from "fs";
import { Readable } from "stream";
import os from "os";
import path from "path";
import { TelegramClient } from "teleproto";
import { StringSession } from "teleproto/sessions/index.js";
import { NewMessage } from "teleproto/events/index.js";
import { FloodWaitError } from "teleproto/errors/index.js";
import { google } from "googleapis";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const STATE_FILE_NAME = "_autod_state.json";

function toInt(value, fallback) {
  const cleaned = String(value ?? "").trim().replace(/^"|"$/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

const ENV = {
  TELEGRAM_API_ID: toInt(process.env.TELEGRAM_API_ID, 0),
  TELEGRAM_API_HASH: process.env.TELEGRAM_API_HASH,
  TELEGRAM_SESSION: process.env.TELEGRAM_SESSION,
  TELEGRAM_TARGET_USERNAME: process.env.TELEGRAM_TARGET_USERNAME,
  BATCH_SIZE: toInt(process.env.BATCH_SIZE, 10),
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  GOOGLE_SHEET_GID: process.env.GOOGLE_SHEET_GID || "0",
  DRIVE_FOLDER_ID: process.env.DRIVE_FOLDER_ID,
  DRIVE_CLIENT_ID: process.env.DRIVE_CLIENT_ID,
  DRIVE_CLIENT_SECRET: process.env.DRIVE_CLIENT_SECRET,
  DRIVE_REFRESH_TOKEN: process.env.DRIVE_REFRESH_TOKEN,
};

const state = {
  running: false,
  log: [],
  summary: null,
  lastRunAt: null,
  progress: null,
};

function pushLog(text) {
  state.log.push({ text, at: new Date().toISOString() });
}

async function fetchUrlsFromSheet() {
  const csvUrl = `https://docs.google.com/spreadsheets/d/${ENV.GOOGLE_SHEET_ID}/export?format=csv&gid=${ENV.GOOGLE_SHEET_GID}`;
  const res = await fetch(csvUrl);
  if (!res.ok) throw new Error(`failed to fetch sheet (status ${res.status})`);
  const csvText = await res.text();
  return csvText
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^"|"$/g, ""))
    .filter((line) => /^https?:\/\//i.test(line));
}

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function fileNameFor(message) {
  if (message.file?.name) return message.file.name;
  const ext = message.file?.ext || "";
  return `telegram_${message.id}${ext}`;
}

function bufferToStream(buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

function getDriveClient() {
  if (!ENV.DRIVE_FOLDER_ID || !ENV.DRIVE_REFRESH_TOKEN) return null;
  const oauth2Client = new google.auth.OAuth2(ENV.DRIVE_CLIENT_ID, ENV.DRIVE_CLIENT_SECRET);
  oauth2Client.setCredentials({ refresh_token: ENV.DRIVE_REFRESH_TOKEN });
  return google.drive({ version: "v3", auth: oauth2Client });
}

async function uploadToDrive(drive, localPath, fileName, attempts = 2) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const res = await drive.files.create({
        requestBody: { name: fileName, parents: [ENV.DRIVE_FOLDER_ID] },
        media: { body: createReadStream(localPath) },
        fields: "id, name",
      });
      return res.data;
    } catch (err) {
      if (attempt === attempts) {
        pushLog(`drive upload failed after ${attempts} attempt(s): ${fileName} (${err.message})`);
        return null;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
  return null;
}

async function findStateFile(drive) {
  const res = await drive.files.list({
    q: `'${ENV.DRIVE_FOLDER_ID}' in parents and name = '${STATE_FILE_NAME}' and trashed = false`,
    fields: "files(id, name)",
    spaces: "drive",
  });
  return res.data.files?.[0] || null;
}

async function loadState(drive) {
  const existing = await findStateFile(drive);
  if (!existing) return { fileId: null, data: { urls: {} } };

  const res = await drive.files.get({ fileId: existing.id, alt: "media" }, { responseType: "text" });
  try {
    const parsed = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
    return { fileId: existing.id, data: parsed && parsed.urls ? parsed : { urls: {} } };
  } catch {
    return { fileId: existing.id, data: { urls: {} } };
  }
}

async function saveState(drive, stateRef) {
  const body = Buffer.from(JSON.stringify(stateRef.data, null, 2));
  if (stateRef.fileId) {
    await drive.files.update({ fileId: stateRef.fileId, media: { mimeType: "application/json", body: bufferToStream(body) } });
  } else {
    const created = await drive.files.create({
      requestBody: { name: STATE_FILE_NAME, parents: [ENV.DRIVE_FOLDER_ID] },
      media: { mimeType: "application/json", body: bufferToStream(body) },
      fields: "id",
    });
    stateRef.fileId = created.data.id;
  }
}

async function sendBatchWithFloodRetry(client, target, batch) {
  const text = batch.join("\n");
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      await client.sendMessage(target, { message: text });
      return { ok: true };
    } catch (err) {
      if (err instanceof FloodWaitError) {
        const seconds = err.seconds || 30;
        pushLog(`rate limited by telegram, waiting ${seconds}s before retrying this batch`);
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
        continue;
      }
      return { ok: false, error: err.message };
    }
  }
  return { ok: false, error: "still rate limited after waiting" };
}

async function runSync() {
  state.running = true;
  state.log = [];
  state.summary = null;
  state.progress = null;
  pushLog("starting sync...");

  let tmpDir = null;
  let client = null;

  try {
    const urls = await fetchUrlsFromSheet();
    pushLog(`fetched ${urls.length} url(s) from sheet`);

    if (urls.length === 0) {
      pushLog("nothing to send");
      state.summary = { sent: 0, downloaded: 0, uploaded: 0, skipped: 0 };
      return;
    }

    const drive = getDriveClient();
    if (!drive) pushLog("drive not configured, files will not be uploaded and dedup tracking is disabled");

    let stateRef = { fileId: null, data: { urls: {} } };
    if (drive) {
      try {
        stateRef = await loadState(drive);
        pushLog(`loaded status for ${Object.keys(stateRef.data.urls).length} previously seen url(s)`);
      } catch (err) {
        pushLog(`could not load status file, continuing without dedup this run (${err.message})`);
      }
    }

    const pending = drive ? urls.filter((u) => stateRef.data.urls[u]?.status !== "done") : urls;
    const skipped = urls.length - pending.length;
    if (skipped > 0) pushLog(`skipping ${skipped} url(s) already completed in a previous run`);

    if (pending.length === 0) {
      pushLog("nothing new to send");
      state.summary = { sent: 0, downloaded: 0, uploaded: 0, skipped };
      return;
    }

    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "autod-"));

    client = new TelegramClient(
      new StringSession(ENV.TELEGRAM_SESSION),
      ENV.TELEGRAM_API_ID,
      ENV.TELEGRAM_API_HASH,
      { connectionRetries: 5 }
    );
    await client.connect();

    const counts = { sent: 0, downloaded: 0, uploaded: 0, skipped };
    const processed = { count: 0 };

    client.addEventHandler(async (event) => {
      const message = event.message;
      if (!message?.media) return;

      const fileName = fileNameFor(message);
      const tmpPath = path.join(tmpDir, fileName);

      try {
        await client.downloadMedia(message.media, { outputFile: tmpPath });
        pushLog(`downloaded: ${fileName}`);
        counts.downloaded += 1;
      } catch (err) {
        pushLog(`download failed: ${fileName} (${err.message})`);
        processed.count += 1;
        return;
      }

      if (drive) {
        const uploaded = await uploadToDrive(drive, tmpPath, fileName);
        if (uploaded) {
          pushLog(`uploaded to drive: ${uploaded.name}`);
          counts.uploaded += 1;
        }
      }

      await fs.unlink(tmpPath).catch(() => {});
      processed.count += 1;
    }, new NewMessage({ chats: [ENV.TELEGRAM_TARGET_USERNAME] }));

    const target = await client.getEntity(ENV.TELEGRAM_TARGET_USERNAME);
    const batches = chunk(pending, ENV.BATCH_SIZE);

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      processed.count = 0;
      counts.sent += batch.length;

      pushLog(`sending batch ${i + 1}/${batches.length} (${batch.length} link(s))`);
      state.progress = { batch: i + 1, totalBatches: batches.length, batchSize: batch.length, processed: 0 };
      const sendResult = await sendBatchWithFloodRetry(client, target, batch);

      if (!sendResult.ok) {
        pushLog(`batch ${i + 1} failed to send: ${sendResult.error}, will retry next run`);
        if (drive) {
          for (const url of batch) {
            stateRef.data.urls[url] = { status: "failed", lastError: sendResult.error, at: new Date().toISOString() };
          }
          await saveState(drive, stateRef).catch((err) => pushLog(`could not save status file: ${err.message}`));
        }
        continue;
      }

      const start = Date.now();
      while (processed.count < batch.length && Date.now() - start < 2 * 60 * 1000) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        state.progress.processed = processed.count;
      }
      pushLog(`batch ${i + 1} result: ${processed.count}/${batch.length} file(s) fully processed`);

      if (drive) {
        const batchStatus = processed.count >= batch.length ? "done" : "partial";
        for (const url of batch) {
          stateRef.data.urls[url] = { status: batchStatus, at: new Date().toISOString() };
        }
        await saveState(drive, stateRef).catch((err) => pushLog(`could not save status file: ${err.message}`));
      }
    }

    state.summary = counts;
    pushLog(
      `done, ${counts.downloaded} of ${counts.sent} downloaded, ${counts.uploaded} of ${counts.sent} uploaded, ${counts.skipped} already up to date`
    );
  } catch (err) {
    pushLog(`sync failed: ${err.message}`);
    state.summary = { error: err.message };
  } finally {
    if (client) await client.disconnect().catch(() => {});
    if (tmpDir) await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
    state.running = false;
    state.progress = null;
    state.lastRunAt = new Date().toISOString();
  }
}

app.post("/api/sync", (req, res) => {
  if (state.running) {
    return res.status(409).json({ error: "a sync is already running" });
  }
  runSync();
  res.json({ started: true });
});

app.get("/api/stream/:fileId", async (req, res) => {
  const drive = getDriveClient();
  if (!drive) return res.status(400).json({ error: "drive not configured" });

  try {
    const meta = await drive.files.get({ fileId: req.params.fileId, fields: "mimeType, size" });
    const range = req.headers.range;

    const driveRes = await drive.files.get(
      { fileId: req.params.fileId, alt: "media" },
      { responseType: "stream", headers: range ? { Range: range } : {} }
    );

    res.setHeader("Content-Type", meta.data.mimeType || "audio/mpeg");
    res.setHeader("Accept-Ranges", "bytes");

    if (range && driveRes.headers["content-range"]) {
      res.status(206);
      res.setHeader("Content-Range", driveRes.headers["content-range"]);
      if (driveRes.headers["content-length"]) res.setHeader("Content-Length", driveRes.headers["content-length"]);
    } else if (meta.data.size) {
      res.setHeader("Content-Length", meta.data.size);
    }

    driveRes.data.pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/files", async (req, res) => {
  const drive = getDriveClient();
  if (!drive) return res.status(400).json({ error: "drive not configured" });

  try {
    const result = await drive.files.list({
      q: `'${ENV.DRIVE_FOLDER_ID}' in parents and trashed = false and name != '${STATE_FILE_NAME}'`,
      fields: "files(id, name, size, modifiedTime, webContentLink)",
      orderBy: "name",
      pageSize: 200,
    });
    res.json({ files: result.data.files || [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/status", (req, res) => {
  res.json(state);
});

app.get("/", (req, res) => {
  res.send("autoD sync backend is running");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
