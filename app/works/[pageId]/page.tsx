import NotionPage from "@/components/organism/NotionPage";
import { fetchRecordMap } from "@/services/fetchData";

export default async function Page({ params }) {
  const { pageId } = await params;

  let recordMap: any;

  try {
    recordMap = await fetchRecordMap(pageId);
  } catch (error) {
    return (
      <main>
        <p>No Page Found</p>
      </main>
    );
  }

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}
