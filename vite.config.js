import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    root: './www/',
    publicDir: 'public/',
    server: {
        port: 3000,
        strictPort: true,
    },
    build: {
        minify: 'esbuild',
        ssr: false,
        target: 'es6',
        reportCompressedSize: true,
        outDir: 'build',
    },
    plugins: [
        react({
            //include: "./www/src/**/*.jsx", // This won't work since the root is already set to
            // ./www insead we will remove the ./www and just use a relative path to the root
            include: 'src/**/*.jsx', // This includes all the .jsx files under src correctly
        }),
    ],
});
