"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Grip, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import NavItem from "../atom/NavItem";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="xl:hidden">
      <div
        aria-controls="nav-items"
        aria-expanded={isOpen}
        className="p-6 flex justify-center items-center border-gray-4 border-l-1 xl:hidden cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={toggleMenu}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      >
        <AnimatePresence initial={false} mode="wait">
          {isOpen ? (
            <motion.div
              key="x-icon"
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              initial={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="burger-icon"
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              initial={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <Grip color="#e95f00" size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="absolute left-0 mt-1.5 z-50 overflow-hidden w-full bg-BG"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col w-full">
              {siteConfig.navItems.map((navItem, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <NavItem
                    Icon={navItem.icon}
                    href={navItem.href}
                    name={navItem.label}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
