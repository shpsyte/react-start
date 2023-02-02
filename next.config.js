/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  // experimental: {
  //   allowMiddlewareResponseBody: true,
  // },
  eslint: {
    dirs: ['src'],
  },
  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },
  reactStrictMode: false,
  swcMinify: true,
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    })

    return config
  },
}

// module.exports = (_, nextConfig) => {
//   return withBundleAnalyzer(nextConfig)
// }

module.exports = nextConfig
