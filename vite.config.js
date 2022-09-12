import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "./",
    root: "./www/",
    publicDir: "public/",
    server: {
        port: 3000,
        strictPort: true,
    },
    build: {
        minify: "esbuild",
        ssr: false,
        target: "es6",
        reportCompressedSize: true,
        outDir: "build",
    },
    plugins: [
        react({
            //include: "./www/src/**/*.jsx", // This doesn't apply to the files in the /www/src/ like the App.jsx. It only applies for the nested .jsx files not directly under the src. In my opinion it should select all .jsx files under the src.
            include: "./www/src/*.jsx", // This includes all the .jsx files under src
        }),
    ],
});
