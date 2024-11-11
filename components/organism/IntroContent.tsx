"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import { siteConfig } from "@/config/site";

const IntroContent = () => {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <div className="flex flex-col gap-4">
      <Image alt="avatars" height={103} src="/image/avatar.png" width={106} />
      <span className="text-3xl xl:text-4xl">
        Hey, I’m Karthikeyan—a <i>passionate</i> Frontend Engineer and tech
        enthusiast
      </span>
      <p className="text-gray-8 xl:text-base">
        With 2+ years of expertise in crafting high-performance, user-focused
        interfaces that drive engagement and seamless interactions.
      </p>

      <div className="flex flex-row gap-2">
        {Object.keys(siteConfig.links).map((name, index) => {
          return (
            <Button
              key={index}
              className="h-12"
              variant="bordered"
              onClick={() =>
                handleClick(
                  siteConfig.links[name as keyof typeof siteConfig.links],
                )
              }
            >
              <Icon
                height="24"
                icon={`mdi:${name}`}
                style={{ color: "#606060" }}
                width="24"
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default IntroContent;
