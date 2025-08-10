// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // or whatever you're using
  images: {
    unoptimized: true, // ✅ disable server-based optimization for export
  },
};

module.exports = nextConfig;
