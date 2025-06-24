export const transformResponseToBlogs = (data: any): Blog[] => {
  return data.results.map((item: any) => {
    const title = item.properties.Title.title[0]?.plain_text || "";
    const thumbNailUrl = item.properties.Thumbnail.files[0]?.file.url || "";
    const category =
      item.properties.Categories.multi_select
        .map((category: any) => category.name)
        .join(", ") || "";
    const time = item.properties.Time.rich_text[0]?.plain_text || "";
    const pageId = item.id;

    return {
      title,
      thumbNailUrl,
      category,
      time,
      pageId,
    };
  });
};

export const transformResponseToWorks = (data: any): WorkItem[] => {
  return data.results.map((item: any) => {
    const title = item.properties.Title.title[0]?.plain_text || "";
    const category = item.properties.Category?.select?.name;
    const pageId = item.id;
    const thumbNailUrl = `/thumbnail/work/${pageId}.webp`
    const github = item.properties.Github.url;
    const live = item.properties.Live.url;
    console.log(pageId)
    return {
      title,
      thumbNailUrl,
      category,
      github,
      live,
      pageId,
    };
  });
};
