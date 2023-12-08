/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['kamva-minio-storage.darkube.app'],
  },
}

module.exports = nextConfig

