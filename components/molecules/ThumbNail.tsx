"use client";
import Image from "next/image";
import { Skeleton } from "@nextui-org/skeleton";
import { useState } from "react";

import SubHead from "../atom/SubHead";

const ThumbNail = ({ thumbNailUrl, title, category }: ThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video rounded-lg overflow-hidden">
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
