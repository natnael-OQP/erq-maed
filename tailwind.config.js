const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: "#191A2E",
				secondary: "#43A7C8",
				color3: "#D3D7DA",
				color4:"#75AEC7",
			},
		},
	},
	plugins: [],
};
