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
        destination: "/?mode=console&panel=architecture",
        permanent: true
      },
      {
        source: "/proof",
        destination: "/?mode=console&panel=proof",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
