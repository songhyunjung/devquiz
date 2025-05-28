import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vitest를 위한 타입 지원 임포트
import type { UserConfigExport } from 'vite';


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
