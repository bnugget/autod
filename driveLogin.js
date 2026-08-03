// One-time OAuth login for Google Drive. Opens a URL for you to approve
// access in your browser, then saves a refresh token so this never has
// to happen again.
// Run with: node driveLogin.js

import http from "http";
import { google } from "googleapis";
import { readFile, writeFile } from "fs/promises";
import { SECRETS } from "./secrets.js";

const REDIRECT_URI = "http://localhost:4321";
const SCOPES = ["https://www.googleapis.com/auth/drive"];

(async () => {
  if (!SECRETS.DRIVE_CLIENT_ID || !SECRETS.DRIVE_CLIENT_SECRET) {
    console.log("Paste your Client ID and Client secret into secrets.js first.");
    process.exit(1);
  }

  const oauth2Client = new google.auth.OAuth2(
    SECRETS.DRIVE_CLIENT_ID,
    SECRETS.DRIVE_CLIENT_SECRET,
    REDIRECT_URI
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });

  console.log("\nOpen this URL in your browser and approve access:\n");
  console.log(authUrl);
  console.log("\nWaiting for you to finish in the browser...");

  const code = await new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, REDIRECT_URI);
      const authCode = url.searchParams.get("code");
      if (!authCode) {
        res.end("Waiting for the Google sign-in redirect...");
        return;
      }

      res.end("You're all set, you can close this tab and go back to the terminal.");
      server.close();
      resolve(authCode);
    });
    server.listen(4321);
  });

  const { tokens } = await oauth2Client.getToken(code);
  console.log("\nAuthorized successfully.");

  const secretsFile = await readFile("./secrets.js", "utf-8");
  const updated = secretsFile.replace(
    /DRIVE_REFRESH_TOKEN:\s*".*?"/,
    `DRIVE_REFRESH_TOKEN: "${tokens.refresh_token}"`
  );
  await writeFile("./secrets.js", updated);

  console.log("Refresh token saved into secrets.js. You won't need to log in again.");
  process.exit(0);
})();
