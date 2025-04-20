/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mint: "#B5EAD7", // Primary soft green
				lavender: "#CBAACB", // Secondary soft purple
				blush: "#FFD6E0", // Accent pink
				ivory: "#FDF6EC", // Background
				earth: "#776B5D", // Text / neutral
				shadow: "#D3C5B7", // Subtle shadow or border
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
