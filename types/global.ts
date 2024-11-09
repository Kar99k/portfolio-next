import { LucideProps } from "lucide-react";

export {};

declare global {
  type NavItem = {
    name: string;
    Icon: React.ComponentType<LucideProps>;
    href: string;
  };
}
