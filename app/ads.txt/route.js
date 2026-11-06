// app/ads.txt/route.js
// Serves dynamic ads.txt for Google AdSense crawler verification

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const pubId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ||
    process.env.ADSENSE_PUB_ID ||
    "pub-7778964423995383";

  const cleanPubId = pubId.replace(/^ca-/, "");

  const content = `# https://www.zapiya.com/ads.txt
# Google AdSense Publisher Verification for Zapiya
google.com, ${cleanPubId}, DIRECT, f08c47fec0942fa0
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

