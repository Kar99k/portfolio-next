import { nextui } from "@nextui-org/theme";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        swing: "swing 1.5s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), tailwindcssAnimate],
};
