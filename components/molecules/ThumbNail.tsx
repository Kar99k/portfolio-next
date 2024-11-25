"use client";
import Image from "next/image";
import { Skeleton } from "@nextui-org/skeleton";
import { useState } from "react";
import clsx from "clsx";

import SubHead from "../atom/SubHead";

const ThumbNail = ({
  thumbNailUrl,
  title,
  category,
  isBlog,
}: ThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={clsx({
        "flex flex-col gap-2": !isBlog,
        "flex flex-col xl:flex-row gap-2 xl:h-32 xl:items-center xl:gap-4":
          isBlog,
      })}
    >
      <div className="aspect-video rounded-lg overflow-hidden cursor-pointer min-w-64">
        <Skeleton className="rounded-lg h-full" isLoaded={isLoaded}>
          <Image
            fill
            alt="Description of the image"
            objectFit="cover"
            src={thumbNailUrl}
            onLoadingComplete={() => {
              setIsLoaded(true);
            }}
          />
        </Skeleton>
      </div>

      <SubHead category={category} title={title} />
    </div>
  );
};

export default ThumbNail;
