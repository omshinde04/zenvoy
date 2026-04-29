export async function GET() {
    const baseUrl = "https://www.zapiya.com"

    const now = new Date().toISOString()

    const pages = [
        { url: "", changefreq: "daily", priority: "1.0" },
        { url: "/templates", changefreq: "weekly", priority: "0.9" },
        { url: "/register", changefreq: "monthly", priority: "0.7" },
        { url: "/privacy", changefreq: "yearly", priority: "0.5" },
        { url: "/terms", changefreq: "yearly", priority: "0.5" },
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("")}
</urlset>`

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    })
}