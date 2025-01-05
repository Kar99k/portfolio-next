"use client";
import React, { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";

import { Colors, Liquid } from "@/components/core/liquid-gradient";

const COLORS: Colors = {
  color1: "#6EE7B7", // Light green (background)
  color2: "#064E3A", // Pale green
  color3: "#A7F3D0", // Minty light green
  color4: "#6EE7B7", // Soft green
  color5: "#34D399", // Medium green
  color6: "#10B981", // Vibrant green
  color7: "#059669", // Deep green
  color8: "#047857", // Rich green
  color9: "#064E3B", // Dark green
  color10: "#064E3A", // Darker green
  color11: "#164E41", // Forest green
  color12: "#1D4F46", // Moss green
  color13: "#165D46", // Deep olive green
  color14: "#0F766E", // Evergreen
  color15: "#115E59", // Dark teal green
  color16: "#1A4D3F", // Dark forest green
  color17: "#064C3C", // Rich dark green
};

const SpecialButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        className="relative inline-block sm:w-48 w-14 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg"
        href="https://shorturl.at/7cQ6R"
        rel="noreferrer"
        target="_blank"
      >
        <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]" />
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Liquid colors={COLORS} isHovered={isHovered} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]" />
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]" />
          <span className="absolute inset-0 rounded-lg bg-black" />
          <Liquid colors={COLORS} isHovered={isHovered} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
                i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
              }`}
            />
          ))}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]" />
        </div>
        <button
          aria-label="Get Started"
          className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className=" flex  items-center justify-between px-4 gap-2   rounded-lg group-hover:text-green-300 text-white text-xl font-semibold tracking-wide whitespace-nowrap">
            <BriefcaseBusiness className="group-hover:fill-green-400 fill-green-400 w-6 h-6 flex-shrink-0 sm:inline-block hidden" />
            <BriefcaseBusiness className="sm:hidden inline-block group-hover:fill-green-400 fill-green-400 w-6 h-6 flex-shrink-0" />
            <span className="sm:inline-block hidden text-base font-maison-light">
              Open to Work
            </span>
          </span>
        </button>
      </a>
    </div>
  );
};

export default SpecialButton;
