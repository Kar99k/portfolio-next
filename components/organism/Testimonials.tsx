import SectionTemplate from "../templates/SectionTemplate";
import TestimonialCard from "../molecules/TestimonialCard";
import Marquee from "../ui/marquee";

import { testimonials } from "@/data/data";
const Testimonials = () => {
  return (
    <SectionTemplate>
      <div>Testimonials</div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10 bg-gradient-to-r from-BG to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10 bg-gradient-to-l from-BG to-transparent" />

        <Marquee pauseOnHover className="[--duration:20s] w-full">
          {testimonials.map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                comment={item.comment}
                designation={item.designation}
                linkedin={item.linkedin}
                name={item.name}
                photoUrl={item.photoUrl}
              />
            );
          })}
        </Marquee>
      </div>
    </SectionTemplate>
  );
};

export default Testimonials;
