import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
  assetsInclude: ['/src/assets/img/**'],
  plugins: [react(), TanStackRouterVite()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
    },
    transformer: 'postcss',
    postcss: {
      plugins: [],
    },
  },
  build: {
    cssMinify: 'esbuild',
  },
});
