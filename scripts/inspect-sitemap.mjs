// scripts/inspect-sitemap.mjs
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

  console.log("=== DETAILED SITEMAP INSPECTION ===");
  const smList = await sc.sitemaps.list({ siteUrl });
  for (const sm of smList.data.sitemap || []) {
    console.log("\nSitemap:", sm.path);
    console.log("Last Downloaded:", sm.lastDownloaded);
    console.log("Last Submitted:", sm.lastSubmitted);
    console.log("Errors:", sm.errors);
    console.log("Warnings:", sm.warnings);
    console.log("Contents:", JSON.stringify(sm.contents, null, 2));
  }

  console.log("\n=== URL INSPECTION API: HOMEPAGE ===");
  try {
    const inspectRes = await sc.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: "https://www.zapiya.com/",
        siteUrl: "https://www.zapiya.com/",
      },
    });
    console.log("Homepage Index Status:", JSON.stringify(inspectRes.data.inspectionResult.indexStatusResult, null, 2));
  } catch (err) {
    console.log("URL inspection error:", err.message);
  }

  console.log("\n=== URL INSPECTION API: BUILDER ===");
  try {
    const inspectRes = await sc.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: "https://www.zapiya.com/builder/classic-ats",
        siteUrl: "https://www.zapiya.com/",
      },
    });
    console.log("Builder Index Status:", JSON.stringify(inspectRes.data.inspectionResult.indexStatusResult, null, 2));
  } catch (err) {
    console.log("URL inspection error:", err.message);
  }
}

run();

