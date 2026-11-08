// scripts/fix-sitemaps.mjs
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

  console.log("Cleaning up old broken sitemaps in Search Console...");

  // 1. Delete accidental broken sitemap '%20+%20sitemap.xml'
  try {
    await sc.sitemaps.delete({
      siteUrl,
      feedpath: "https://www.zapiya.com/%20+%20sitemap.xml",
    });
    console.log("✓ Deleted broken sitemap: '%20+%20sitemap.xml'");
  } catch (e) {
    console.log("Delete '%20+%20sitemap.xml' result:", e.message);
  }

  // 2. Delete old legacy sitemap 'sitemap'
  try {
    await sc.sitemaps.delete({
      siteUrl,
      feedpath: "https://www.zapiya.com/sitemap",
    });
    console.log("✓ Deleted legacy sitemap: 'sitemap'");
  } catch (e) {
    console.log("Delete 'sitemap' result:", e.message);
  }

  // 3. Re-submit clean modern sitemap.xml with all 21 URLs
  console.log("\nSubmitting clean modern sitemap.xml...");
  try {
    await sc.sitemaps.submit({
      siteUrl,
      feedpath: "https://www.zapiya.com/sitemap.xml",
    });
    console.log("✓ Successfully submitted https://www.zapiya.com/sitemap.xml to Google!");
  } catch (e) {
    console.log("Submit error:", e.message);
  }

  // Check updated sitemap list
  console.log("\nCurrent active sitemaps in Search Console:");
  const list = await sc.sitemaps.list({ siteUrl });
  (list.data.sitemap || []).forEach(s => {
    console.log(`- ${s.path} (Errors: ${s.errors}, Warnings: ${s.warnings})`);
  });
}

run();

