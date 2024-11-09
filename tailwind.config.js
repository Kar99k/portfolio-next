import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'maison-bold': ['MaisonNeue-ExtendedBold', 'sans-serif'],
        'maison-demi-bold': ['MaisonNeue-ExtendedDemiBold', 'sans-serif'],
        'maison-medium': ['MaisonNeue-ExtendedMedium', 'sans-serif'],
        'maison-light': ['MaisonNeue-ExtendedLight', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
