/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				lg: '990px',
				xl: '1054px',
			},
		},
	},
	corePlugins: {
		container: false
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					width: '100%',
					marginInline: 'auto',
					paddingInline: '15px',
					'@screen sm': {
						maxWidth: '610px',
						paddingInline: '0',
					},
					'@screen md': {
						maxWidth: '738px',
						paddingInline: '0',
					},
					'@screen lg': {
						maxWidth: '960px',
						paddingInline: '0',
					},
					'@screen xl': {
						maxWidth: '1024px',
						paddingInline: '0',
					},
				}
			})
		}
	],
}