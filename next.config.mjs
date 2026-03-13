/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.spicezgold.com',
        port: '',
        pathname: '/**', // Allows all paths from this domain
      },
      {
        protocol: 'https',
        hostname: 'p3india.com',
        port: '',
        pathname: '/**', // This fixes the specific error you encountered
      },
    ],
  },
};

export default nextConfig;
