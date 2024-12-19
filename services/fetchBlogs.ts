import { queryDatabase } from "./fetchData";

import { transformResponseToBlogs } from "@/utils/util";

export const fetchBlogsData = async () => {
  const res = await queryDatabase("15e848fc79c680128247c71adf6ff0bd");
  const blogs = transformResponseToBlogs(res);

  return blogs;
};
