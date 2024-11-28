import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#ffffff",
              fontWeight: "bold",
            },
            h2: {
              color: "#ffffff",
            },
            h3: {
              color: "#ffffff",
            },
            p: {
              color: "#606060",
            },
            ul: {
              listStyleType: "disc",
              listStylePosition: "inside",
              marginLeft: "0.5rem",
            },
            ol: {
              listStyleType: "decimal",
              listStylePosition: "inside",
              marginLeft: "0.5rem",
            },
            li: {
              color: "#606060", // GitHub dark gray text color for list items
            },
            a: {
              color: "#2563eb",
              textDecoration: "underline",
              "&:hover": {
                color: "#2563eb",
              },
            },
            blockquote: {
              borderLeftColor: "#2563eb",
              fontStyle: "italic",
              color: "#6b7280",
            },
            code: {
              backgroundColor: "#f6f8fa", // Light gray background for inline code
              color: "#f76b15", // Text color for inline code
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "0.875rem", // Slightly smaller font size for inline code
            },

            strong: {
              color: "#606060",
              fontStyle: "bold",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};
