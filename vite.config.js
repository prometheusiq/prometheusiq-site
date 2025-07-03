import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic'   // ← force classic transform; leaves your React imports intact
    })
  ],
  build: {
    outDir: 'dist'
  }
});
