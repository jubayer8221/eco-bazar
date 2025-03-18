import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your other Next.js configurations here...

  // Example: If you need to rewrite API requests to your backend
  async rewrites() {
    return [
      {
        source: '/api/main.py', // Example: All requests starting with /api/
        destination: 'https://ecobazar-backend-steel.vercel.app/', // Your backend URL
      },
    ];
  },
};

export default nextConfig;
