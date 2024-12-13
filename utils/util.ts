import { NotionAPI } from "notion-client";

export async function fetchRecordMap(pageId: string) {
  const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER,
    authToken: process.env.NOTION_AUTH_TOKEN,
  });

  try {
    return await notion.getPage(pageId);
  } catch (error) {
    throw new Error("Could not fetch the Notion page data.");
  }
}
