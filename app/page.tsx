import { Divider } from "@nextui-org/divider";

import IntroContent from "@/components/organism/IntroContent";
import SectionTemplate from "@/components/templates/SectionTemplate";
import Works from "@/components/organism/Works";
import Testimonials from "@/components/organism/Testimonials";

export default function Home() {
  return (
    <div className="">
      <section className="container mx-auto">
        <IntroContent />
      </section>
      <Divider />

      <SectionTemplate>
        <div className="h-36" />
      </SectionTemplate>
      <Divider />

      <section className="container mx-auto">
        <Works />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Testimonials />
      </section>
      <Divider />
    </div>
  );
}
