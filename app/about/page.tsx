import { NotionAPI } from "notion-client";

import NotionPage from "@/components/organism/NotionPage";

export default async function Home() {
  const notion = new NotionAPI({
    activeUser: "38f42088-c717-4810-8b0e-1408646d805b",
    authToken:
      "v03%3AeyJhbGciOiJkaXIiLCJraWQiOiJwcm9kdWN0aW9uOnRva2VuLXYzOjIwMjQtMTEtMDciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0..KHREuAQdzvkalI1sDS9b8g.jLXt9uXJ0whIw8aDMJI2Hx-RSNzd5ZqbIsVAKAMH0IZMkJD6khKsl8SKe8ulu5UcltRWxceDX7l-txKItKFRmVBlmfx7RRwv_ktsC7HwYkbiIv2KmRu7myMpS1pgwNINBOfroioQz6rmW9vNeIht_GQfQRnyT-3ePVFrqm9ruCaSQ4zOYHzfo4m87oHi5wg5pBBdhkdiSUgdNvE75b1HA-K1lJdRkENtXgp36iC8Assj7gJvxKldo6PX-R-yUQYJpzQRe7UFyfkJ3QP_UhzDs_o-IPfyaOyK8441lvoPi_fTahTOOXSsueXmp39_kimC3T5zQgD2QmZYooQUhF-_49VQVQelaPUrVXsSTfNT8SA.IQ0fQAOnb-ESuSOoX0NCkohb-AP9VD5UcG8iikkkKDA",
  });

  const recordMap = await notion.getPage("bdac170d156445d99def819c8a7ca458");

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}
