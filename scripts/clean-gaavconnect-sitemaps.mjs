// scripts/clean-gaavconnect-sitemaps.mjs
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
  const siteUrl = "https://www.gaavconnect.in/";

  console.log("Cleaning up accidental sitemap entry on GaavConnect...");
  try {
    await sc.sitemaps.delete({
      siteUrl,
      feedpath: "https://www.gaavconnect.in/",
    });
    console.log("✓ Successfully deleted accidental sitemap entry 'https://www.gaavconnect.in/'!");
  } catch (e) {
    console.log("Delete result:", e.message);
  }

  const list = await sc.sitemaps.list({ siteUrl });
  console.log("\nActive Sitemaps on GaavConnect:");
  (list.data.sitemap || []).forEach(s => {
    console.log(`- ${s.path} (Errors: ${s.errors}, Warnings: ${s.warnings})`);
  });
}

run();

