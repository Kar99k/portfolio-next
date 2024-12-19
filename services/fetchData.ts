import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

export async function fetchRecordMap(pageId: string) {
  const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER,
    authToken: process.env.NOTION_AUTH_TOKEN,
  });

  try {
    return await notion.getPage(pageId);
  } catch (error: any) {
    throw new Error("Could not fetch the Notion page data.", error);
  }
}

// Function to query a database
export const queryDatabase = async (databaseId: string) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Done",
        },
      },
      page_size: 10,
    });

    return response;
  } catch (error: any) {
    throw new Error("Could not fetch the Notion Table.", error);
  }
};
