import Image from "next/image";

import SubHead from "../atom/SubHead";

const ThumbNail = ({ thumbNailUrl, title, category }: ThumbnailProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-72 rounded-lg overflow-hidden">
        <Image
          alt="Description of the image"
          height={100}
          layout="responsive"
          src={thumbNailUrl}
          width={288}
        />
      </div>

      <SubHead category={category} title={title} />
    </div>
  );
};

export default ThumbNail;
