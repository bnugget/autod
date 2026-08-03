// Step 3: send the URLs to the bot in batches of up to CONFIG.BATCH_SIZE,
// and save whatever files come back into your Downloads folder.
// Run with: node sendAndDownload.js

import { readFile, mkdir } from "fs/promises";
import { createReadStream } from "fs";
import path from "path";
import os from "os";
import { google } from "googleapis";
import { TelegramClient } from "teleproto";
import { StringSession } from "teleproto/sessions/index.js";
import { NewMessage } from "teleproto/events/index.js";
import { SECRETS } from "./secrets.js";
import { CONFIG } from "./config.js";

const DOWNLOADS_DIR = path.join(os.homedir(), "Downloads");
const WAIT_PER_BATCH_MS = 2 * 60 * 1000; // give the bot up to 2 minutes per batch

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

function fileNameFor(message) {
  if (message.file?.name) return message.file.name;
  const ext = message.file?.ext || "";
  return `telegram_${message.id}${ext}`;
}

function getDriveClient() {
  if (!CONFIG.DRIVE_FOLDER_ID || !SECRETS.DRIVE_REFRESH_TOKEN) return null;
  const oauth2Client = new google.auth.OAuth2(SECRETS.DRIVE_CLIENT_ID, SECRETS.DRIVE_CLIENT_SECRET);
  oauth2Client.setCredentials({ refresh_token: SECRETS.DRIVE_REFRESH_TOKEN });
  return google.drive({ version: "v3", auth: oauth2Client });
}

async function uploadToDrive(drive, localPath, fileName) {
  const res = await drive.files.create({
    requestBody: { name: fileName, parents: [CONFIG.DRIVE_FOLDER_ID] },
    media: { body: createReadStream(localPath) },
    fields: "id, name",
  });
  return res.data;
}

async function waitUntil(conditionFn, timeoutMs) {
  const start = Date.now();
  while (!conditionFn() && Date.now() - start < timeoutMs) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

(async () => {
  if (!SECRETS.TELEGRAM_SESSION) {
    console.log("No saved session found. Run node telegramLogin.js first.");
    process.exit(1);
  }
  if (!CONFIG.TELEGRAM_TARGET_USERNAME) {
    console.log("Add the bot's username to TELEGRAM_TARGET_USERNAME in config.js first.");
    process.exit(1);
  }

  const urls = JSON.parse(await readFile("./urls.json", "utf-8"));
  if (urls.length === 0) {
    console.log("urls.json is empty. Run node fetchSheetUrls.js first.");
    process.exit(0);
  }

  await mkdir(DOWNLOADS_DIR, { recursive: true });

  const drive = getDriveClient();
  if (!drive) {
    console.log("Drive isn't configured yet (DRIVE_FOLDER_ID / DRIVE_KEY_FILE in config.js), files will only be saved locally.");
  }

  const client = new TelegramClient(
    new StringSession(SECRETS.TELEGRAM_SESSION),
    SECRETS.TELEGRAM_API_ID,
    SECRETS.TELEGRAM_API_HASH,
    { connectionRetries: 5 }
  );

  await client.connect();
  console.log("Connected to Telegram.");

  const target = await client.getEntity(CONFIG.TELEGRAM_TARGET_USERNAME);

  const received = { count: 0 };

  client.addEventHandler(async (event) => {
    const message = event.message;
    if (!message?.media) return;

    const fileName = fileNameFor(message);
    const outputPath = path.join(DOWNLOADS_DIR, fileName);

    try {
      console.log(`Downloading: ${fileName}`);
      await client.downloadMedia(message.media, { outputFile: outputPath });
      console.log(`Saved locally: ${outputPath}`);
      received.count += 1;
    } catch (err) {
      console.log(`Failed to download a file: ${err.message}`);
      return;
    }

    if (drive) {
      try {
        console.log(`Uploading to Drive: ${fileName}`);
        const uploaded = await uploadToDrive(drive, outputPath, fileName);
        console.log(`Uploaded to Drive: ${uploaded.name} (id: ${uploaded.id})`);
      } catch (err) {
        console.log(`Drive upload failed for ${fileName}: ${err.message}. It's still saved locally in Downloads.`);
      }
    }
  }, new NewMessage({ chats: [CONFIG.TELEGRAM_TARGET_USERNAME] }));

  const batches = chunk(urls, CONFIG.BATCH_SIZE || 10);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    received.count = 0;

    console.log(`\nSending batch ${i + 1}/${batches.length} (${batch.length} link(s))...`);
    await client.sendMessage(target, { message: batch.join("\n") });

    await waitUntil(() => received.count >= batch.length, WAIT_PER_BATCH_MS);
    console.log(`Batch ${i + 1} result: ${received.count}/${batch.length} file(s) received.`);
  }

  console.log("\nAll batches sent. Files are in your Downloads folder.");
  await client.disconnect();
  process.exit(0);
})();
