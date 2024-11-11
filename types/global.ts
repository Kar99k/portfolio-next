import { LucideProps } from "lucide-react";

export {};

declare global {
  type NavItem = {
    name: string;
    Icon: React.ComponentType<LucideProps>;
    href: string;
  };

  type HeadingProps = {
    subtitle: string;
    heading: string;
  };

  interface ThumbnailProps {
    thumbnailUrl: string;
    subtitle: HeadingProps["subtitle"];
    heading: HeadingProps["heading"];
  }
}
