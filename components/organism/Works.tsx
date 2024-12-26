import Link from "next/link";

import ThumbNail from "../molecules/ThumbNail";
import SectionTemplate from "../templates/SectionTemplate";
import Image from "next/image";

const Works = ({
  buttonVisible = true,
  perPage = 10,
  works,
}: FeaturedTemplate & { works: WorkItem[] }) => {
  return (
    <SectionTemplate>
      <div className="text-3xl">
        <div className="flex flex-col">
          Works
          <Image
            alt="workinprogress"
            className="z-10 ml-3.5 -mt-5 animate-swing"
            height={50}
            src="/image/workInProgress.png"
            style={{ transformOrigin: "center top" }}
            width={50}
          />
        </div>
      </div>
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
          <Link
            className="w-full h-14 text-base border-[1px] border-zinc-800 flex justify-center items-center rounded-xl hover:bg-zinc-900"
            href="/works"
          >
            View All Works
          </Link>
        </div>
      )}
    </SectionTemplate>
  );
};

export default Works;
