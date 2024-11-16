import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	root: './src',
	build: {
		outDir: '../output',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/app.js'),
			},
		},
	},
	server: {
		port: 8080,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/app.scss";`,
			},
		},
	},
})
