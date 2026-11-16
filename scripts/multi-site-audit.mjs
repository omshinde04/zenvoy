// scripts/multi-site-audit.mjs
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve(__dirname, "../gsc-credentials.json"),
    scopes: [
      "https://www.googleapis.com/auth/webmasters.readonly",
      "https://www.googleapis.com/auth/webmasters",
    ],
  });

  const sc = google.searchconsole({ version: "v1", auth });

  console.log("==================================================");
  console.log("   OM SHINDE ECOSYSTEM: GOOGLE SEARCH CONSOLE AUDIT");
  console.log("==================================================\n");

  const sitesRes = await sc.sites.list();
  const sites = sitesRes.data.siteEntry || [];
  console.log(`Connected Properties (${sites.length}):`);
  sites.forEach((s) => console.log(`✓ ${s.siteUrl} [${s.permissionLevel}]`));

  const today = new Date();
  const endDate = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  const startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  for (const site of sites) {
    const siteUrl = site.siteUrl;
    console.log(`\n--------------------------------------------------`);
    console.log(`>>> AUDITING: ${siteUrl}`);
    console.log(`--------------------------------------------------`);

    // 1. Sitemaps
    console.log(`[Sitemaps]`);
    try {
      const smRes = await sc.sitemaps.list({ siteUrl });
      const sitemaps = smRes.data.sitemap || [];
      if (sitemaps.length === 0) {
        console.log("  ⚠️ No sitemap submitted.");
      } else {
        sitemaps.forEach(sm => {
          console.log(`  - ${sm.path}: Errors: ${sm.errors || 0}, Warnings: ${sm.warnings || 0}, Submitted: ${sm.contents?.[0]?.submitted || "N/A"}`);
        });
      }
    } catch (e) {
      console.log("  Could not fetch sitemaps:", e.message);
    }

    // 2. Top Search Queries (Last 28 Days)
    console.log(`\n[Top Queries - Last 28 Days]`);
    try {
      const qRes = await sc.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ["query"],
          rowLimit: 10,
        },
      });
      const qRows = qRes.data.rows || [];
      if (qRows.length === 0) {
        console.log("  No query data recorded in this period.");
      } else {
        console.table(
          qRows.map(r => ({
            Query: r.keys[0],
            Clicks: r.clicks,
            Impressions: r.impressions,
            CTR: `${(r.ctr * 100).toFixed(1)}%`,
            Position: r.position.toFixed(1),
          }))
        );
      }
    } catch (e) {
      console.log("  Query error:", e.message);
    }

    // 3. Top Pages (Last 28 Days)
    console.log(`\n[Top Pages - Last 28 Days]`);
    try {
      const pRes = await sc.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ["page"],
          rowLimit: 10,
        },
      });
      const pRows = pRes.data.rows || [];
      if (pRows.length === 0) {
        console.log("  No page data recorded in this period.");
      } else {
        console.table(
          pRows.map(r => ({
            Page: r.keys[0],
            Clicks: r.clicks,
            Impressions: r.impressions,
            CTR: `${(r.ctr * 100).toFixed(1)}%`,
            Position: r.position.toFixed(1),
          }))
        );
      }
    } catch (e) {
      console.log("  Page error:", e.message);
    }

    // 4. Inspect Homepage
    console.log(`\n[Homepage Index Status]`);
    try {
      const hp = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
      const insp = await sc.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: hp,
          siteUrl,
        },
      });
      const st = insp.data.inspectionResult.indexStatusResult;
      console.log(`  Verdict: ${st.verdict}`);
      console.log(`  Coverage: ${st.coverageState}`);
      console.log(`  Last Crawled: ${st.lastCrawlTime || "N/A"}`);
      console.log(`  Robots: ${st.robotsTxtState}`);
    } catch (e) {
      console.log("  Inspection error:", e.message);
    }
  }

  console.log("\n==================================================");
  console.log("           AUDIT RUN COMPLETE");
  console.log("==================================================");
}

run();

