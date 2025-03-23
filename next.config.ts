import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // other Next.js configurations here...

  // If need to rewrite API requests to  backend
  async rewrites() {
    return [
      {
        source: '/api/main.py', // All requests starting with /api/
        destination: 'https://ecobazar-backend-steel.vercel.app/', //  backend URL
      },
    ];
  },
};

export default nextConfig;
