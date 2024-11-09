import {
  BriefcaseBusiness,
  House,
  Newspaper,
  Phone,
  UserRound,
} from "lucide-react";

/* eslint-disable prettier/prettier */
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Karthikeyan's Space",
  description: "Hi👋🏽, Welcome to my space checkout my Works and Blog articles",
  navItems: [
    {
      label: "Home",
      href: "/",
      icon: House,
    },
    {
      label: "Works",
      href: "/works",
      icon: BriefcaseBusiness,
    },
    {
      label: "Blogs",
      href: "/blogs",
      icon: Newspaper,
    },
    {
      label: "About",
      href: "/about",
      icon: UserRound,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: Phone,
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
