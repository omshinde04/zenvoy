// scripts/gsc-audit.mjs
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const keyPath = path.resolve(__dirname, "../gsc-credentials.json");
  if (!fs.existsSync(keyPath)) {
    console.error("Credentials file not found at:", keyPath);
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: [
      "https://www.googleapis.com/auth/webmasters.readonly",
      "https://www.googleapis.com/auth/webmasters",
    ],
  });

  const searchconsole = google.searchconsole({
    version: "v1",
    auth,
  });

  console.log("Checking authenticated sites in Search Console...");
  try {
    const sitesRes = await searchconsole.sites.list();
    const sites = sitesRes.data.siteEntry || [];
    console.log(`Found ${sites.length} site(s) connected to this service account:`);
    sites.forEach((s) => console.log(`- ${s.siteUrl} (permission: ${s.permissionLevel})`));

    if (sites.length === 0) {
      console.log("\n⚠️ NOTE: No sites found yet!");
      console.log("Make sure to add the service account email to your Google Search Console property:");
      const creds = JSON.parse(fs.readFileSync(keyPath, "utf8"));
      console.log(`Email to add: ${creds.client_email}`);
      console.log("In GSC: Settings > Users and permissions > Add user > Paste email > Full permission.");
      return;
    }

    // Identify target site (zapiya.com or sc-domain:zapiya.com)
    const targetSite = sites.find(s => s.siteUrl.includes("zapiya.com")) || sites[0];
    const siteUrl = targetSite.siteUrl;
    console.log(`\nRunning live audit for: ${siteUrl}`);

    // 1. Sitemaps Audit
    console.log("\n--- 1. SITEMAPS AUDIT ---");
    try {
      const sitemapsRes = await searchconsole.sitemaps.list({ siteUrl });
      const sitemaps = sitemapsRes.data.sitemap || [];
      if (sitemaps.length === 0) {
        console.log("⚠️ No sitemaps submitted yet.");
      } else {
        sitemaps.forEach(sm => {
          console.log(`- ${sm.path}: Status = ${sm.errors ? "ERRORS" : "OK"} (Last downloaded: ${sm.lastDownloaded})`);
        });
      }
    } catch (e) {
      console.log("Could not fetch sitemaps:", e.message);
    }

    // 2. Search Analytics (Last 28 days)
    console.log("\n--- 2. SEARCH ANALYTICS (Last 28 Days) ---");
    const today = new Date();
    const endDate = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]; // GSC has ~2-3 days lag
    const startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    try {
      const analyticsRes = await searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ["query"],
          rowLimit: 25,
        },
      });

      const rows = analyticsRes.data.rows || [];
      if (rows.length === 0) {
        console.log("No query impressions recorded yet (site may be newly added or pending data processing).");
      } else {
        console.log(`Top ${rows.length} Queries by Impressions:`);
        console.table(
          rows.map(r => ({
            Query: r.keys[0],
            Clicks: r.clicks,
            Impressions: r.impressions,
            CTR: `${(r.ctr * 100).toFixed(2)}%`,
            Position: r.position.toFixed(1),
          }))
        );
      }
    } catch (e) {
      console.log("Search Analytics query error:", e.message);
    }

    // 3. Top Pages by Impressions
    console.log("\n--- 3. TOP PAGES BY IMPRESSIONS ---");
    try {
      const pagesRes = await searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ["page"],
          rowLimit: 15,
        },
      });
      const pageRows = pagesRes.data.rows || [];
      if (pageRows.length === 0) {
        console.log("No page data recorded yet.");
      } else {
        console.table(
          pageRows.map(r => ({
            Page: r.keys[0],
            Clicks: r.clicks,
            Impressions: r.impressions,
            CTR: `${(r.ctr * 100).toFixed(2)}%`,
            Position: r.position.toFixed(1),
          }))
        );
      }
    } catch (e) {
      console.log("Page query error:", e.message);
    }

  } catch (err) {
    console.error("Search Console API Error:", err.message);
  }
}

run();

