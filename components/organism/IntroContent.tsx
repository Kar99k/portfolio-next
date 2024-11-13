import Image from "next/image";

import LinkButtons from "../molecules/LinkButton";

const IntroContent = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 xl:p-8">
      <Image alt="avatars" height={103} src="/image/avatar.png" width={106} />
      <span className="text-3xl xl:text-4xl">
        Hey, I’m Karthikeyan—a <i>passionate</i> Frontend Engineer and tech
        enthusiast
      </span>
      <p className="text-gray-8 xl:text-base">
        With 2+ years of expertise in crafting high-performance, user-focused
        interfaces that drive engagement and seamless interactions.
      </p>

      <LinkButtons />
    </div>
  );
};

export default IntroContent;
