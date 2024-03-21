/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss");
module.exports = withMT({
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		screen: {
			xsm: "425px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [
		plugin(function ({ matchUtilities }) {
			matchUtilities(
				{
					"grid-cols-repeat": (value) => {
						return {
							"grid-template-columns":
								"repeat(auto-fill, " + value + "px)",
						};
					},
				},
				{ values: { 300: "300", 400: "400" } }
			);
		}),
	],
});
