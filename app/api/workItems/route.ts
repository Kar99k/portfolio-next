// app/api/workItems/route.ts
import path from "path";
import fs from "fs";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "workItems.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const workItems: WorkItem[] = JSON.parse(jsonData);

    return NextResponse.json(workItems);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data", error },
      { status: 500 }
    );
  }
}
