// scripts/inspect-all-urls.mjs
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve(__dirname, "../gsc-credentials.json"),
    scopes: ["https://www.googleapis.com/auth/webmasters"],
  });

  const sc = google.searchconsole({ version: "v1", auth });
  const siteUrl = "https://www.zapiya.com/";

  const urls = [
    "https://www.zapiya.com/",
    "https://www.zapiya.com/templates",
    "https://www.zapiya.com/guides",
    "https://www.zapiya.com/guides/ats-resume-guide-2026",
    "https://www.zapiya.com/about",
    "https://www.zapiya.com/privacy",
    "https://www.zapiya.com/terms",
    "https://www.zapiya.com/contact",
  ];

  console.log("Inspecting key URLs across Zapiya...\n");
  for (const url of urls) {
    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl,
        },
      });
      const info = res.data.inspectionResult.indexStatusResult;
      console.log(`URL: ${url}`);
      console.log(`- Verdict: ${info.verdict}`);
      console.log(`- Coverage: ${info.coverageState}`);
      console.log(`- Crawled: ${info.lastCrawlTime || "Not yet crawled"}`);
      console.log(`- Robots: ${info.robotsTxtState}\n`);
    } catch (e) {
      console.log(`Error inspecting ${url}:`, e.message);
    }
  }
}

run();

