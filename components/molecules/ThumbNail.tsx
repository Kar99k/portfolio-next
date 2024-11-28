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
  time,
}: ThumbnailProps & { isBlog: boolean }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={clsx({
        "hover:text-orange-10": true,
        "flex flex-col gap-2": !isBlog,
        "flex flex-col xl:flex-row gap-2 xl:h-32 xl:items-center xl:gap-4":
          isBlog,
      })}
    >
      <div className="aspect-video rounded-lg overflow-hidden min-w-64">
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

      <SubHead category={category} time={time} title={title} />
    </div>
  );
};

export default ThumbNail;
