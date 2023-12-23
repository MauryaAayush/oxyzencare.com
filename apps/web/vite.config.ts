import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
	return {
		plugins: [
			ViteImageOptimizer({
				png: {
					quality: 100,
				},
				jpeg: {
					quality: 100,
				},
				jpg: {
					quality: 100,
				},
				tiff: {
					quality: 100,
				},
				gif: {},
				webp: {
					lossless: true,
				},
				avif: {
					lossless: true,
				},
			}),

			react(),
			eslint(),
		],
		optimizeDeps: {
			exclude: ["js-big-decimal"],
		},
	};
});

