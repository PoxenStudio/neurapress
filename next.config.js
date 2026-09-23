/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  // Ensure external packages are handled correctly
  transpilePackages: ['mermaid', 'katex'],
  // Configure webpack if needed
  webpack: (config) => {
    // Handle mermaid.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig 