// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },

	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
			]
		}
	},

	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/ui",
	],
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: ['personal.nekdress.online'],
		}
	},
});

