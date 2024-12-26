import Link from "next/link";
import Image from "next/image";

import ThumbNail from "../molecules/ThumbNail";

import SectionTemplate from "@/components/templates/SectionTemplate";

const Blogs = ({
  buttonVisible = true,
  perPage = 10,
  blogs,
}: FeaturedTemplate & { blogs: Blog[] }) => {
  return (
    <SectionTemplate>
      <div className="text-3xl">
        <div className="flex flex-col">
          Blogs
          <Image
            alt="workinprogress"
            className="z-10 ml-3 -mt-5 animate-swing"
            height={50}
            src="/image/workInProgress.png"
            style={{ transformOrigin: "center top" }}
            width={50}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:flex xl:flex-col xl:gap-12">
        {blogs?.length === 0 ? "loading" : ""}

        {blogs?.map((item, index) => {
          if (index < perPage)
            return (
              <ThumbNail
                key={index}
                category={item.category}
                isBlog={true}
                pageId={item.pageId}
                thumbNailUrl={item?.thumbNailUrl}
                time={item.time}
                title={item.title}
              />
            );
        })}
      </div>
      {buttonVisible && (
        <div className="flex justify-center">
          <Link
            className="w-full h-14 text-base border-[1px] border-zinc-800 flex justify-center items-center rounded-xl hover:bg-zinc-900"
            href="/blogs"
          >
            View All Blogs
          </Link>
        </div>
      )}
    </SectionTemplate>
  );
};

export default Blogs;
