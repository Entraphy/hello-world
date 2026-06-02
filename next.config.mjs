/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/briefing",
        destination: "/#access",
        permanent: true
      },
      {
        source: "/demo",
        destination: "/#access",
        permanent: true
      },
      {
        source: "/contact",
        destination: "/#access",
        permanent: true
      },
      {
        source: "/products/:path*",
        destination: "/#access",
        permanent: true
      },
      {
        source: "/reality-bound-systems",
        destination: "/",
        permanent: true
      },
      {
        source: "/architecture",
        destination: "/",
        permanent: true
      },
      {
        source: "/proof",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
