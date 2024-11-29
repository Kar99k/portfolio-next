import fs from "fs";
import path from "path";

import { serialize } from "next-mdx-remote/serialize";

import MDXRenderer from "@/components/organism/MDXRenderer";

const About = async () => {
  // Ensure you correctly use the `slug` from the URL
  const filePath = path.join(process.cwd(), "public", "content", "about.mdx");

  // Check if the file exists before trying to read it
  if (!fs.existsSync(filePath)) {
    // Handle file not found (optional)
    return <div>Post not found</div>;
  }

  const mdxContent = fs.readFileSync(filePath, "utf-8");

  // Serialize the MDX content
  const serializedContent = await serialize(mdxContent);

  return (
    <MDXRenderer buttonVisible={false} serializedContent={serializedContent} />
  );
};

export default About;
