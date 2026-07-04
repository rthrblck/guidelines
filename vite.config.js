import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@material-ui/core': '@material-ui/core/esm',
      '@material-ui/icons': '@material-ui/icons/esm',
      '@material-ui/styles': '@material-ui/styles/esm',
    },
  },
  test: {
    environment: 'jsdom',
  },
});
