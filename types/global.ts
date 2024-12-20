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
    pageId: string;
  }

  interface WorkItem extends ThumbnailProps {
    description: string;
    github: string;
    live: string;
  }

  interface Blog extends ThumbnailProps {
    description: string;
    time: string;
  }

  type NameTag = {
    name: string;
    designation: string;
    photoUrl: string;
    linkedin: string;
  };

  interface TestimonialCard extends NameTag {
    comment: string;
  }

  interface FeaturedTemplate {
    buttonVisible: boolean;
    perPage?: number;
  }

  interface TechStackAtomProps {
    iconName: string;
    title: string;
  }
}
