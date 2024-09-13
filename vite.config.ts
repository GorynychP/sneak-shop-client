import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // exportType: 'default',
                expandProps: 'start',
                // ref: true,
                // svgo: false,
                // titleProp: true,
                // svgProps: { fill: 'currentColor' },
            },
            // include: '**/*.svg',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // base: '/sneak-shop-client/',
});
