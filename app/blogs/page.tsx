import Blogs from "@/components/organism/Blogs";
import { fetchBlogsData } from "@/services/fetchBlogs";

export const revalidate = 3600;

export default async function Page() {
  const blogs = await fetchBlogsData();

  return <Blogs buttonVisible={false} blogs={blogs} perPage={blogs?.length}/>;
}
