import { Divider } from "@nextui-org/divider";

import IntroContent from "@/components/organism/IntroContent";
import SectionTemplate from "@/components/templates/SectionTemplate";
import Works from "@/components/organism/Works";

export default function Home() {
  return (
    <div className="">
      <section className="container mx-auto">
        <IntroContent />
      </section>
      <Divider />

      <SectionTemplate>
        <div className="" />
      </SectionTemplate>
      <Divider />

      <section className="container mx-auto">
        <Works />
      </section>
      <Divider />
    </div>
  );
}
