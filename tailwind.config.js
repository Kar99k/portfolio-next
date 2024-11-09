import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BG: "#121212",
        "orange-9": "#f76b15",
        "orange-10": "#e95f00",
        "orange-3": "#351c10",
        "gray-12": "#eeeeee",
        "gray-8": "#606060",
        "gray-4": "#292929",
      },
      fontFamily: {
        "maison-bold": ["MaisonNeue-ExtendedBold", "sans-serif"],
        "maison-demi-bold": ["MaisonNeue-ExtendedDemiBold", "sans-serif"],
        "maison-medium": ["MaisonNeue-ExtendedMedium", "sans-serif"],
        "maison-light": ["MaisonNeue-ExtendedLight", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
