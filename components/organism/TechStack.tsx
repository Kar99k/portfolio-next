import TechStackAtom from "../atom/TechStackAtom";
import SectionTemplate from "../templates/SectionTemplate";

import { iconSet } from "@/data/data";

const TechStack = () => {
  return (
    <SectionTemplate>
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {iconSet.map((item, index) => {
            return <TechStackAtom key={index} {...item} />;
          })}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default TechStack;
