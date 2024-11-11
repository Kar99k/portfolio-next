"use client";

import { Chip } from "@nextui-org/chip";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grip, X } from "lucide-react";
import Link from "next/link";

import NavItem from "../atom/NavItem";

import { siteConfig } from "@/config/site";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(() => {
    if (window.innerWidth >= 1280) {
      return true;
    }

    return false;
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleToggle() {
      if (window.innerWidth >= 1280) {
        setIsOpen(true);
      } else setIsOpen(false);
    }

    window.addEventListener("resize", handleToggle);

    return () => window.removeEventListener("resize", handleToggle);
  });

  return (
    <div className="border-gray-4 border-r-1 xl:h-dvh xl:w-[340px]">
      <div className="flex justify-between border-gray-4 border-b-1">
        <div className="flex gap-2 items-center p-6 w-full">
          <Link className="text-xl" href="/">
            Karthikeyan’s
          </Link>
          <span>
            <Chip
              classNames={{
                base: "bg-orange-3",
                content: "text-orange-10 text-sm ",
              }}
              radius="sm"
            >
              Space
            </Chip>
          </span>
        </div>

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
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="absolute z-50 overflow-hidden w-full xl:static bg-BG"
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

export default NavBar;
