import NotionPage from "@/components/organism/NotionPage";
import { fetchRecordMap } from "@/services/fetchData";

export default async function Page() {
  let recordMap: any;

  try {
    recordMap = await fetchRecordMap("163848fc79c680a5aa07d1b1b916bba9");
  } catch {
    return (
      <main>
        <p>No Page Found</p>
      </main>
    );
  }

  return <NotionPage recordMap={recordMap} />;
}
