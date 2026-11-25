// app/robots.js

export default function robots() {
  const baseUrl = "https://www.zapiya.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Applebot",
          "Applebot-Extended",
          "Google-Extended",
          "cohere-ai",
          "Bytespider",
          "CCBot"
        ],
        allow: "/",
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
