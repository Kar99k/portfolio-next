import NotionPage from "@/components/organism/NotionPage";
import { fetchBlogsData } from "@/services/fetchBlogs";
import { fetchRecordMap } from "@/services/fetchData";

export const revalidate = 3600;

export default async function Page({ params }) {
  const { pageId } = await params;

  let recordMap: any;

  try {
    recordMap = await fetchRecordMap(pageId);
  } catch {
    return (
      <main>
        <p>No Page Found</p>
      </main>
    );
  }

  return <NotionPage recordMap={recordMap} />;
}

export async function generateStaticParams() {
  const blogs = await fetchBlogsData();

  return blogs.map((blog) => ({
    pageId: blog.pageId,
  }));
}
