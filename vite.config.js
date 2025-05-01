import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig( {
    plugins: [tailwindcss({
        config: './src/tailwind.config.css',
    })],
    build: {
        outDir: './dist',
        cssCodeSplit: true,
        assetsDir : 'assets',
        sourcemap: true,
        rollupOptions: {
            input: {
                main: 'index.html'
            },
            output: {
                entryFileNames: 'assets/output.js',
                assetFileNames: ({name}) => {
                    if (name && name.endsWith('.css')) {
                        return 'assets/output.css';
                    }
                    return 'assets/[name].[ext]';
                },
            },
        },
    }
});