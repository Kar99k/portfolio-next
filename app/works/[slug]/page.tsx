// pages/blog/[slug].tsx
import fs from "fs";
import path from "path";

import { serialize } from "next-mdx-remote/serialize";

import MDXRenderer from "@/components/organism/MDXRenderer";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  // Ensure you correctly use the `slug` from the URL
  const filePath = path.join(
    process.cwd(),
    "public",
    "content",
    "works", // Your folder structure with MDX files
    `${params.slug}.mdx`,
  );

  // Check if the file exists before trying to read it
  if (!fs.existsSync(filePath)) {
    // Handle file not found (optional)
    return <MDXRenderer serializedContent={""} />;
  }

  const mdxContent = fs.readFileSync(filePath, "utf-8");

  // Serialize the MDX content
  const serializedContent = await serialize(mdxContent);

  return <MDXRenderer serializedContent={serializedContent} />;
};

export default BlogPost;
