import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { maison } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import NavBar from "@/components/organism/NavBar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/space.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx(maison.className, "min-h-screen dark:bg-BG")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col xl:grid xl:grid-cols-[340px_1fr] min-h-screen">
            <header className="xl:sticky xl:top-0 xl:h-screen bg-BG">
              <NavBar />
            </header>

            <main className="w-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
