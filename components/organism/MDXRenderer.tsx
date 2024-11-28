"use client";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/navigation";

// components/MDXRenderer.tsx
const MDXRenderer = ({ serializedContent }: { serializedContent: any }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <article className="container prose mx-auto py-8 px-6 xl:py-16 xl:px-12 flex flex-col gap-12">
      <div>
        <button
          className="flex gap-3 text-foreground-500 hover:text-orange-9 no-underline"
          onClick={handleGoBack}
        >
          <ArrowLeft width={16} />
          Back
        </button>
      </div>
      {serializedContent && (
        <div>
          <MDXRemote {...serializedContent} />
        </div>
      )}

      {!serializedContent && <div>No Post Found</div>}
    </article>
  );
};

export default MDXRenderer;
