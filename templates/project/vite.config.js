import { defineConfig } from 'vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import stringPlugin from 'vite-plugin-string'

export default defineConfig({
	root: './src',
	build: {
		outDir: '../output',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/app.html'),
			},
		},
	},
	server: {
		port: 8080,
	},
	plugins: [
		createHtmlPlugin({
			minify: true,
			entry: 'app.js',
			template: 'app.html',
		}),
		stringPlugin({
			include: '**/*.html',
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
})
