import NotionPage from "@/components/organism/NotionPage";
import { fetchRecordMap } from "@/services/fetchData";
import { fetchWorksData } from "@/services/fetchWorks";

export const revalidate = 1800;

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
  const works = await fetchWorksData();

  return works.map((work) => ({
    pageId: work.pageId,
  }));
}
