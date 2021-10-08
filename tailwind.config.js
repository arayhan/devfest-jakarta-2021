const materialColor = require("./src/utils/material.colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: materialColor.COLORS,
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
