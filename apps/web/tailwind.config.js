/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgNormalButtonGreen: "#04cc9e",
				bgButtonWhite: "#fafeff",
				bgHomeGreenFirst: "#f8fefd",
				bgHomeGreenSecond: "#ecfef9",
				bgFooterGreen: "#04cc9e",
				bgCardLightGreen: "#e6fff9",
				bgCardWhite: "#fefffe",
				bgCardIcon: "#fefffe",
				bgFooterButton: "#32a98c",
				bgBorder: "#90fbe3",
			},
			textColor: {
				textNormalBlack: "#0e0e25",
				textNormalWhite: "#edf8f5",
				textNormalGray: "#b3b3b3",
				textGreenFirst: "#1ecfa3",
				textNavLinkNormal: "#adafaf",
				textNavLinkClicked: "#2ed2ac",
				textWhiteGreenButton: "#b3b3b3",
				textCardSmallGreen: "#edf8f5",
				textFooterButton: "#0f0f24",
			},
			fontSize: {},
			fontFamily: {
				rubik: ["Rubik"],
			},
		},
	},
	plugins: [],
};
