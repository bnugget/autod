// Step 1: pull the list of URLs out of your public Google Sheet.
// Run with: node fetchSheetUrls.js

import { writeFile } from "fs/promises";
import { CONFIG } from "./config.js";

async function fetchUrlsFromSheet(sheetId, gid) {
  const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
  const res = await fetch(csvUrl);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch the sheet (status ${res.status}). Double check the sheet ID/gid, and that sharing is set to "Anyone with the link can view".`
    );
  }

  const csvText = await res.text();

  const urls = csvText
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^"|"$/g, "")) // Google sometimes wraps cells in quotes
    .filter((line) => /^https?:\/\//i.test(line)); // keep only lines that look like a URL

  return urls;
}

(async () => {
  if (CONFIG.GOOGLE_SHEET_ID === "PASTE_YOUR_SHEET_ID_HERE") {
    console.log("Open config.js and paste in your actual Google Sheet ID first.");
    process.exit(1);
  }

  const urls = await fetchUrlsFromSheet(CONFIG.GOOGLE_SHEET_ID, CONFIG.GOOGLE_SHEET_GID);

  console.log(`Found ${urls.length} URL(s):`);
  urls.forEach((u, i) => console.log(`${i + 1}. ${u}`));

  await writeFile("urls.json", JSON.stringify(urls, null, 2));
  console.log("\nSaved to urls.json");
})();
