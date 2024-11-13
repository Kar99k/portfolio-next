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
  };

  interface ThumbnailProps extends HeadingProps {
    thumbNailUrl: string;
  }

  interface WorkItem extends ThumbnailProps {
    description: string;
    github: string;
    live: string;
    md: string;
  }

  type NameTag = {
    name: string;
    designation: string;
  };

  interface TestimonialCard extends NameTag {
    comment: string;
  }
}
