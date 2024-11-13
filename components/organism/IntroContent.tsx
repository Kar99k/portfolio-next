import Image from "next/image";
import { Button } from "@nextui-org/button";

import LinkButtons from "../molecules/LinkButton";

const IntroContent = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 xl:p-12 xl:gap-8">
      <div className="flex justify-between">
        <Image alt="avatars" height={103} src="/image/avatar.png" width={106} />
        <Button
          color="success"
          radius="sm"
          startContent={<div>👩🏽‍💻</div>}
          variant="flat"
        >
          <p>Open to Work</p>
        </Button>
      </div>
      <span className="text-3xl xl:text-4xl max-w-screen-lg">
        Hey, I’m Karthikeyan—a <i>passionate</i> Frontend Engineer and tech
        enthusiast
      </span>
      <p className="text-gray-8 xl:text-base max-w-screen-xl">
        Frontend Engineer with 2+ years of experience in React, Angular, and
        Next.js, with a strong foundation in HTML, CSS, JavaScript, and
        TypeScript. Focused on being a Team Player creating responsive,
        high-performance web and desktop applications from scratch.
      </p>

      <LinkButtons />
    </div>
  );
};

export default IntroContent;
