/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// Export the configuration wrapped with MDX support
module.exports = withMDX(nextConfig);
