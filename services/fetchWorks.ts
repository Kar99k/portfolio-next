import { queryDatabase } from "./fetchData";

import { transformResponseToWorks } from "@/utils/util";

export const fetchWorksData = async () => {
  const res = await queryDatabase("15f848fc79c68051abe5c8217f81714f");
  const works = transformResponseToWorks(res);

  return works;
};
