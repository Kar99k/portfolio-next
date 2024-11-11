import Image from "next/image";

import SubHead from "../atom/SubHead";

const ThumbNail = ({ thumbnailUrl, heading, subtitle }: ThumbnailProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          alt="Description of the image"
          layout="fill"
          src={thumbnailUrl}
        />
      </div>
      <SubHead heading={heading} subtitle={subtitle} />
    </div>
  );
};

export default ThumbNail;
