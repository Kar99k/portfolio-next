import path from "path";
import fs from "fs";

import MarkdownComponent from "@/components/organism/MDXRenderer";
import SectionTemplate from "@/components/templates/SectionTemplate";

export const getMarkdownContent = (id: string) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "content",
    "work",
    `Project_${id}.md`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  return fs.readFileSync(filePath, "utf8");
};

export async function generateStaticParams() {
  const directoryPath = path.join(process.cwd(), "public", "content", "work");
  const filenames = fs.readdirSync(directoryPath); // Read all files in the directory

  return filenames.map((filename: string) => {
    const [name, idWithExtension] = (filename || "").split("_"); // Split on '_'
    const id = idWithExtension?.replace(".md", ""); // Remove '.md' from the second part

    return { id };
  });
}

const page = ({ params }: { params: { id: string } }) => {
  const markdown = getMarkdownContent(params.id);

  return (
    <section className="container mx-auto max-w-screen-xl xl:pt-9">
      <SectionTemplate>
        <MarkdownComponent markdown={markdown} />
      </SectionTemplate>
    </section>
  );
};

export default page;
