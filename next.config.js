/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},

  async redirects() {
    return [
      {
        source: "/login",
        destination: "/",
        permanent: true, // HTTP 301 Moved Permanently
      },
      {
        source: "/signin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
