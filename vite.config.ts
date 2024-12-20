import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        visualizer({
            filename: 'bundle-analysis.html',
            // open: true,
        }),
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
    css: {
        preprocessorOptions: {
            scss: {
                // api: 'modern-compiler',
                // silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
                // quietDeps: true,
            },
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // lodash: ['lodash'],
                },
            },
        },
    },
    // base: '/sneak-shop-client/',
});
