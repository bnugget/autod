// Step 2: log in once as your Telegram account and save a session so you
// never have to log in again after this.
// Run with: node telegramLogin.js

import { TelegramClient } from "teleproto";
import { StringSession } from "teleproto/sessions/index.js";
import input from "input";
import { readFile, writeFile } from "fs/promises";
import { SECRETS } from "./secrets.js";

(async () => {
  if (!SECRETS.TELEGRAM_API_ID || !SECRETS.TELEGRAM_API_HASH) {
    console.log("Open secrets.js and paste in your API ID and API hash from my.telegram.org first.");
    process.exit(1);
  }

  const stringSession = new StringSession(SECRETS.TELEGRAM_SESSION || "");
  const client = new TelegramClient(
    stringSession,
    SECRETS.TELEGRAM_API_ID,
    SECRETS.TELEGRAM_API_HASH,
    { connectionRetries: 5 }
  );

  await client.start({
    phoneNumber: async () => await input.text("Your phone number (with country code, e.g. +15551234567): "),
    password: async () => await input.text("Your Telegram 2FA password (press Enter if you don't have one set): "),
    phoneCode: async () => await input.text("The login code Telegram just sent you: "),
    onError: (err) => console.log(err),
  });

  console.log("\nLogged in successfully.");

  const sessionString = client.session.save();

  // Write the session string back into secrets.js so future scripts can reuse it
  const secretsFile = await readFile("./secrets.js", "utf-8");
  const updated = secretsFile.replace(
    /TELEGRAM_SESSION:\s*".*?"/,
    `TELEGRAM_SESSION: "${sessionString}"`
  );
  await writeFile("./secrets.js", updated);

  console.log("Session saved into secrets.js. You won't need to log in again after this.");

  await client.disconnect();
  process.exit(0);
})();
