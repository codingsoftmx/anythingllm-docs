const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Environment-based configuration
  output: process.env.NEXT_PUBLIC_OUTPUT_DIR === 'dist' ? 'export' : undefined,
  distDir: process.env.NEXT_PUBLIC_OUTPUT_DIR || 'dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  // Image optimization settings
  images: {
    unoptimized: process.env.NEXT_PUBLIC_OUTPUT_DIR === 'dist',
  },
  
  // Webpack configuration for SVG support
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  
  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/anythingllm-cloud/502',
        destination: '/cloud/error-502',
        permanent: true,
      },
      {
        source: '/llm-not-using-my-docs',
        destination: '/chatting-with-documents/rag-in-anythingllm',
        permanent: true,
      },
    ];
  },
}

module.exports = withNextra(nextConfig)
