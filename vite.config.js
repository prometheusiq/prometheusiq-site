import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // tell Vite/Babel to use the classic JSX transform,
      // which will leave your `import React from 'react'` in place
      jsxRuntime: 'classic'
    })
  ],
  build: {
    outDir: 'dist'
  }
});
