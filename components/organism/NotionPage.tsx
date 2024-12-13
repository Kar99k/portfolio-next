"use client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto">
      <NotionRenderer
        className="notion-renderer"
        darkMode={true}
        disableHeader={true}
        fullPage={true}
        previewImages={true}
        recordMap={recordMap}
      />
    </section>
  );
}
