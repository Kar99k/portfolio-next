import SectionTemplate from "../templates/SectionTemplate";
import TestimonialCard from "../molecules/TestimonialCard";

import { testimonials } from "@/data/data";
const Testimonials = () => {
  return (
    <SectionTemplate>
      <div className="text-3xl">Testimonials</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {testimonials.map((item, index) => {
          return (
            <TestimonialCard
              key={index}
              comment={item.comment}
              designation={item.designation}
              name={item.name}
            />
          );
        })}
      </div>
    </SectionTemplate>
  );
};

export default Testimonials;
