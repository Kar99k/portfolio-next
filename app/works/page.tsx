import Works from "@/components/organism/Works";
import { fetchWorksData } from "@/services/fetchWorks";

export const revalidate = 3600;

export default async function Page() {
  const works = await fetchWorksData();

  return <Works buttonVisible={false} perPage={works.length} works={works} />;
}
