/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER,
    NOTION_AUTH_TOKEN: process.env.NOTION_AUTH_TOKEN,
  },
};

module.exports = nextConfig;
