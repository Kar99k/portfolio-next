// pages/blog/[slug].tsx
import fs from "fs";
import path from "path";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import MDXRenderer from "@/components/organism/MDXRenderer";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  // Ensure you correctly use the `slug` from the URL
  const filePath = path.join(
    process.cwd(),
    "public",
    "content",
    "blogs", // Your folder structure with MDX files
    `${params.slug}.mdx`
  );

  // Check if the file exists before trying to read it
  if (!fs.existsSync(filePath)) {
    // Handle file not found (optional)
    return <div>Post not found</div>;
  }

  const mdxContent = fs.readFileSync(filePath, "utf-8");

  // Serialize the MDX content
  const serializedContent = await serialize(mdxContent);

  return <MDXRenderer serializedContent={serializedContent} />;
};

export default BlogPost;
