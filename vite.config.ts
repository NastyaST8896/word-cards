import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: {
            '@lib': path.resolve(__dirname, './src/lib'),
        }
    }
});