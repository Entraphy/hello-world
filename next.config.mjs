/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
