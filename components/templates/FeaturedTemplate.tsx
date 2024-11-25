import { Button } from "@nextui-org/button";
import clsx from "clsx";

import ThumbNail from "../molecules/ThumbNail";

import SectionTemplate from "./SectionTemplate";

import { workItem } from "@/data/data";

const FeaturedTemplate = ({ isBlog, heading }: FeaturedTemplate) => {
  return (
    <SectionTemplate>
      <div className="text-3xl">Featured {heading}</div>
      <div
        className={clsx({
          "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4": !isBlog,
          "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:flex xl:flex-col xl:gap-12":
            isBlog,
        })}
      >
        {workItem?.map((item, index) => {
          return (
            <ThumbNail
              key={index}
              category={item.category}
              isBlog={isBlog}
              thumbNailUrl={item?.thumbNailUrl}
              title={item.title}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button className="w-full h-14" variant="bordered">
          View All {heading}
        </Button>
      </div>
    </SectionTemplate>
  );
};

export default FeaturedTemplate;
