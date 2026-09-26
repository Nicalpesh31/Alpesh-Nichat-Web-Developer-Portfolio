import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 4173,
    strictPort: false,
    hmr: {
      host: 'localhost',
    },
  },
  preview: {
    host: 'localhost',
    port: 4174,
    strictPort: true,
  },
});