import localFont from "next/font/local";

export const maison = localFont({
  src: [
    {
      path: "../public/fonts/MaisonNeue-ExtendedMedium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});
