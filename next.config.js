/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: isProd ? 'https://static-1257325628.cos.ap-hongkong.myqcloud.com' : undefined,
}

module.exports = nextConfig
