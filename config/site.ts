/* eslint-disable prettier/prettier */
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Karthikeyan's Space+",
  description: "Hi👋🏽, Welcome to my space checkout my Works and Blog articles",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Works",
      href: "/works",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
