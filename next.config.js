/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'ziateam.com',
          },
        ],
        destination: 'https://ziavision.com',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'ziawe.com',
          },
        ],
        destination: 'https://ziavision.com',
        permanent: true,
      },
    ]
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

module.exports = nextConfig 