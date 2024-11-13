"use client";

import { useEffect, useState } from "react";

import ThumbNail from "../molecules/ThumbNail";
import SectionTemplate from "../templates/SectionTemplate";

import { loadWorkItems } from "@/utils/util";

const Works = () => {
  const [workItem, setWorkItem] = useState<WorkItem[]>();

  useEffect(() => {
    loadWorkItems()
      .then((data) => {
        setWorkItem(data);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <SectionTemplate>
      <div className="text-3xl">Featured Works</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {workItem?.map((item, index) => {
          return (
            <ThumbNail
              key={index}
              category={item.category}
              thumbNailUrl={item?.thumbNailUrl}
              title={item.title}
            />
          );
        })}
      </div>
    </SectionTemplate>
  );
};

export default Works;
