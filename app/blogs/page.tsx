import Blogs from "@/components/organism/Blogs";
import { fetchBlogsData } from "@/services/fetchBlogs";

export const revalidate = 1800;

export default async function Page() {
  const blogs = await fetchBlogsData();

  return <Blogs blogs={blogs} buttonVisible={false} perPage={blogs?.length} />;
}
