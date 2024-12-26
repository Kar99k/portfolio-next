import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";

import { maison } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import NavBar from "@/components/organism/NavBar";
import Footer from "@/components/molecules/Footer";

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
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={clsx(maison.className, "min-h-screen dark:bg-BG")}>
        <SpeedInsights />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col xl:grid xl:grid-cols-[340px_1fr] min-h-screen">
            <header className="xl:sticky xl:top-0 xl:h-screen bg-BG">
              <Divider />
              <NavBar />
            </header>

            <div className="flex flex-col bg-BG">
              <main className="w-full">{children}</main>
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
