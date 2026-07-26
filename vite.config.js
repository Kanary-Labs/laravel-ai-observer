import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    plugins: [react(), tailwindcss()],
    build: {
        assetsInlineLimit: 1_000_000,
        emptyOutDir: true,
        minify: 'esbuild',
        outDir: 'dist',
        lib: {
            entry: 'resources/js/main.jsx',
            formats: ['es'],
            fileName: () => 'ai-observatory.js',
        },
        rollupOptions: {
            output: {
                assetFileNames: (asset) =>
                    asset.names?.some((name) => name.endsWith('.css'))
                        ? 'ai-observatory.css'
                        : 'assets/[name]-[hash][extname]',
            },
        },
    },
})
