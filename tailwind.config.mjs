/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#272727',
				'secondary': '#fff',
				'logoGreen': '#69B025',
				'logoBlue': '#245AA4',
				'logodark': '#0A195F',
				'fondolight': '#FFFFFF',
				'fondodark': '#252626',

			}
		},
	},
	plugins: [animations],
}
