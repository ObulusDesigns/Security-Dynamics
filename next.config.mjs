/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/learning-center',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/learning-center/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Optimize chunk splitting to prevent missing chunk errors
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 20,
              enforce: true,
            },
            framework: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-sync-external-store)[\\/]/,
              name: 'framework',
              priority: 30,
              enforce: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
      
      // Add chunk loading timeout configuration
      config.output = {
        ...config.output,
        chunkLoadTimeout: 60000, // 60 seconds timeout for chunk loading
      };
    }
    return config;
  },
};

export default nextConfig;