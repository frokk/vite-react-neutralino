import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: "./",
	root: "./www/",
	publicDir: "public/",
	build: {
		minify: 'esbuild',
		ssr: false,
		target: "es6",
		reportCompressedSize: true,
		outDir: 'build'
	},
	plugins: [
		react({
			include: "./www/src/**/*.jsx"
		})
	]
})
