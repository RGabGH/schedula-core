import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  // The local wrapper + core are linked via the workspace; let Vite follow them.
  optimizeDeps: { include: ['schedula-core', 'schedula-core-react'] },
});
