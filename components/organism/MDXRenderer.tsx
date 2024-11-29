"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/navigation";

// components/MDXRenderer.tsx
const MDXRenderer = ({
  serializedContent,
  buttonVisible = true,
}: {
  serializedContent: any;
  buttonVisible?: boolean;
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <motion.div
      animate={{ opacity: 1 }} // Target state, opacity will animate to 1
      initial={{ opacity: 0 }} // Initial state, opacity is 0
      transition={{ duration: 1 }} // Duration of the animation (in seconds)
    >
      <article className="container prose max-w-screen-xl mx-auto py-8 px-6 xl:py-16 xl:px-12 flex flex-col gap-12">
        {buttonVisible && (
          <div>
            <button
              className="flex gap-3 text-foreground-500 hover:text-orange-9 no-underline"
              onClick={handleGoBack}
            >
              <ArrowLeft width={16} />
              Back
            </button>
          </div>
        )}
        {serializedContent && (
          <div>
            <MDXRemote {...serializedContent} />
          </div>
        )}

        {!serializedContent && <div>No Post Found</div>}
      </article>
    </motion.div>
  );
};

export default MDXRenderer;
