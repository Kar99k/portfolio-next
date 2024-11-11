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
    linkedin: "https://www.linkedin.com/in/karthikeyan-venkateswaran/",
    github: "https://github.com/Kar99k",
    whatsapp: "",
    twitter: "",
  },
};
