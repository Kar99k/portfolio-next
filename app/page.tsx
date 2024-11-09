import NavItem from "@/components/atom/NavItem";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="w-100">
      {siteConfig.navItems.map((navItem, index) => {
        return (
          <NavItem
            name={navItem.label}
            Icon={navItem.icon}
            href={navItem.href}
          />
        );
      })}
    </div>
  );
}
