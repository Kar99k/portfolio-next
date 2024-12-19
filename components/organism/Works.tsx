import Link from "next/link";
import { Button } from "@nextui-org/button";

import ThumbNail from "../molecules/ThumbNail";
import SectionTemplate from "../templates/SectionTemplate";

const Works = ({
  buttonVisible = true,
  perPage = 10,
  works,
}: FeaturedTemplate & { works: WorkItem[] }) => {
  return (
    <SectionTemplate>
      <div className="text-3xl">Works</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {works?.map((item, index) => {
          if (index < perPage)
            return (
              <ThumbNail
                key={index}
                category={item.category}
                isBlog={false}
                pageId={item.pageId}
                thumbNailUrl={item?.thumbNailUrl}
                title={item.title}
              />
            );
        })}
      </div>
      {buttonVisible && (
        <div className="flex justify-center">
          <Link className="w-full" href="/works">
            <Button className="w-full h-14 text-base" variant="bordered">
              View All works
            </Button>
          </Link>
        </div>
      )}
    </SectionTemplate>
  );
};

export default Works;
