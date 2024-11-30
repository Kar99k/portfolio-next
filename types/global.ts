import { LucideProps } from "lucide-react";

export {};

declare global {
  type NavItem = {
    name: string;
    Icon: React.ComponentType<LucideProps>;
    href: string;
  };

  type HeadingProps = {
    category: string;
    title: string;
    time?: string;
  };

  interface ThumbnailProps extends HeadingProps {
    thumbNailUrl: string;
    slug?: string;
  }

  interface WorkItem extends ThumbnailProps {
    description: string;
    github: string;
    live: string;
    slug: string;
  }

  type NameTag = {
    name: string;
    designation: string;
  };

  interface TestimonialCard extends NameTag {
    comment: string;
  }

  interface FeaturedTemplate {
    buttonVisible: boolean;
    perPage?: number;
  }

  interface Blog extends ThumbnailProps {
    description: string;
    time: string;
    slug: string;
  }

  interface TechStackAtomProps {
    iconName: string;
    title: string;
  }
}
