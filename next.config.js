/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER,
    NOTION_AUTH_TOKEN: process.env.NOTION_AUTH_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        pathname: "/**", // Match all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;
