"use client";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

// components/MDXRenderer.tsx
const MDXRenderer = ({ serializedContent }: { serializedContent: any }) => {
  return (
    <article className="container prose mx-auto py-8 px-6 xl:py-16 xl:px-12 flex flex-col gap-12">
      <div>
        <Link
          className="flex gap-3 text-foreground-500 hover:text-orange-9 no-underline"
          href="/blogs"
        >
          <ArrowLeft width={16} />
          Back
        </Link>
      </div>
      <div>
        <MDXRemote {...serializedContent} />
      </div>
    </article>
  );
};

export default MDXRenderer;
