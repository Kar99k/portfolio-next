import NavItem from "../atom/NavItem";

import { siteConfig } from "@/config/site";

const DesktopMenu = () => {
  return (
    <div className="hidden xl:flex flex-col w-full xl:static bg-BG">
      {siteConfig.navItems.map((navItem, index) => (
        <NavItem
          key={index}
          Icon={navItem.icon}
          href={navItem.href}
          name={navItem.label}
        />
      ))}
    </div>
  );
};

export default DesktopMenu;
