import express from "express";
import cors from "cors";
import { createReadStream, promises as fs } from "fs";
import os from "os";
import path from "path";
import { TelegramClient } from "teleproto";
import { StringSession } from "teleproto/sessions/index.js";
import { NewMessage } from "teleproto/events/index.js";
import { google } from "googleapis";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

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

function getDriveClient() {
  if (!ENV.DRIVE_FOLDER_ID || !ENV.DRIVE_REFRESH_TOKEN) return null;
  const oauth2Client = new google.auth.OAuth2(ENV.DRIVE_CLIENT_ID, ENV.DRIVE_CLIENT_SECRET);
  oauth2Client.setCredentials({ refresh_token: ENV.DRIVE_REFRESH_TOKEN });
  return google.drive({ version: "v3", auth: oauth2Client });
}

async function uploadToDrive(drive, localPath, fileName) {
  const res = await drive.files.create({
    requestBody: { name: fileName, parents: [ENV.DRIVE_FOLDER_ID] },
    media: { body: createReadStream(localPath) },
    fields: "id, name",
  });
  return res.data;
}

async function runSync() {
  state.running = true;
  state.log = [];
  state.summary = null;
  pushLog("starting sync...");

  let tmpDir = null;
  let client = null;

  try {
    const urls = await fetchUrlsFromSheet();
    pushLog(`fetched ${urls.length} url(s) from sheet`);

    if (urls.length === 0) {
      pushLog("nothing to send");
      state.summary = { sent: 0, downloaded: 0, uploaded: 0 };
      return;
    }

    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "autod-"));
    const drive = getDriveClient();
    if (!drive) pushLog("drive not configured, files will not be uploaded");

    client = new TelegramClient(
      new StringSession(ENV.TELEGRAM_SESSION),
      ENV.TELEGRAM_API_ID,
      ENV.TELEGRAM_API_HASH,
      { connectionRetries: 5 }
    );
    await client.connect();

    const counts = { sent: 0, downloaded: 0, uploaded: 0 };
    const received = { count: 0 };

    client.addEventHandler(async (event) => {
      const message = event.message;
      if (!message?.media) return;

      const fileName = fileNameFor(message);
      const tmpPath = path.join(tmpDir, fileName);

      try {
        await client.downloadMedia(message.media, { outputFile: tmpPath });
        pushLog(`downloaded: ${fileName}`);
        counts.downloaded += 1;
        received.count += 1;
      } catch (err) {
        pushLog(`download failed: ${fileName} (${err.message})`);
        return;
      }

      if (drive) {
        try {
          const uploaded = await uploadToDrive(drive, tmpPath, fileName);
          pushLog(`uploaded to drive: ${uploaded.name}`);
          counts.uploaded += 1;
        } catch (err) {
          pushLog(`drive upload failed: ${fileName} (${err.message})`);
        }
      }

      await fs.unlink(tmpPath).catch(() => {});
    }, new NewMessage({ chats: [ENV.TELEGRAM_TARGET_USERNAME] }));

    const target = await client.getEntity(ENV.TELEGRAM_TARGET_USERNAME);
    const batches = chunk(urls, ENV.BATCH_SIZE);

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      received.count = 0;
      counts.sent += batch.length;

      pushLog(`sending batch ${i + 1}/${batches.length} (${batch.length} link(s))`);
      await client.sendMessage(target, { message: batch.join("\n") });

      const start = Date.now();
      while (received.count < batch.length && Date.now() - start < 2 * 60 * 1000) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      pushLog(`batch ${i + 1} result: ${received.count}/${batch.length} file(s) received`);
    }

    state.summary = counts;
    pushLog(`done, ${counts.downloaded} of ${counts.sent} downloaded, ${counts.uploaded} of ${counts.sent} uploaded`);
  } catch (err) {
    pushLog(`sync failed: ${err.message}`);
    state.summary = { error: err.message };
  } finally {
    if (client) await client.disconnect().catch(() => {});
    if (tmpDir) await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
    state.running = false;
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

app.get("/api/status", (req, res) => {
  res.json(state);
});

app.get("/", (req, res) => {
  res.send("autoD sync backend is running");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
