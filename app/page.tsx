import { Divider } from "@nextui-org/divider";

import IntroContent from "@/components/organism/IntroContent";
import SectionTemplate from "@/components/templates/SectionTemplate";
import Works from "@/components/templates/FeaturedTemplate";
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
        <Works heading="Works" isBlog={false} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Testimonials />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Works heading="Blogs" isBlog={true} />
      </section>
      <Divider />
    </div>
  );
}
