import Link from "next/link";
import { Button } from "@nextui-org/button";

import ThumbNail from "../molecules/ThumbNail";

import SectionTemplate from "@/components/templates/SectionTemplate";
import { fetchBlogsData } from "@/services/fetchBlogs";

const Blogs = ({
  buttonVisible = true,
  perPage = 10,
  blogs,
}: FeaturedTemplate & { blogs: Blog[] }) => {
  return (
    <SectionTemplate>
      <div className="text-3xl">Blogs</div>
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
          <Link className="w-full" href="/blogs">
            <Button className="w-full h-14 text-base" variant="bordered">
              View All Blogs
            </Button>
          </Link>
        </div>
      )}
    </SectionTemplate>
  );
};

export default Blogs;
