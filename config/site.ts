import {
  BriefcaseBusiness,
  House,
  Newspaper,
  Phone,
  UserRound,
} from "lucide-react";

import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/icons";

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

  links: [
    {
      link: "https://www.linkedin.com/in/karthikeyan-venkateswaran/",
      icon: LinkedInIcon,
    },
    {
      link: "https://github.com/Kar99k",
      icon: GithubIcon,
    },
    {
      link: "",
      icon: WhatsappIcon,
    },
    {
      link: "",
      icon: TwitterIcon,
    },
  ],
};
