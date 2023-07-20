/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				redPod: '#FE6D73',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
