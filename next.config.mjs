/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // TEMPORARY: figma.com asset links expire ~7 days after export.
      // Replace with /public/assets/* once real files are downloaded (see README "Assets" section).
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
