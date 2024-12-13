"use client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

export default function NotionPage({ recordMap }) {
  // Conditional rendering to ensure recordMap is available
  if (!recordMap) {
    return <div>Loading...</div>; // Show a loading message while the data is being fetched
  }

  return (
    <section className="container mx-auto">
      <NotionRenderer
        className="notion-renderer"
        recordMap={recordMap} // Pass the recordMap here
        darkMode={true}
        fullPage={false}
      />
    </section>
  );
}
