import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      canvas: { browser: './lib/canvas-stub.ts' },
    },
  },
};

export default nextConfig;
