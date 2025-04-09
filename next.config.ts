import type { NextConfig } from 'next';
import { randomBytes } from 'crypto';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
