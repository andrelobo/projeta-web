import type { NextConfig } from 'next';
import { loadWebEnv } from './src/config/env';

// Fail-fast no build: ambiente inválido interrompe o deploy (SPEC-000 §4.1).
loadWebEnv(process.env);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
