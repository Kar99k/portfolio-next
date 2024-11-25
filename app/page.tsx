import { Divider } from "@nextui-org/divider";

import IntroContent from "@/components/organism/IntroContent";
import SectionTemplate from "@/components/templates/SectionTemplate";
import FeaturedTemplate from "@/components/templates/FeaturedTemplate";
import Testimonials from "@/components/organism/Testimonials";
import Contact from "@/components/organism/Contact";

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
        <FeaturedTemplate heading="Works" isBlog={false} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Testimonials />
      </section>
      <Divider />

      <section className="container mx-auto">
        <FeaturedTemplate heading="Blogs" isBlog={true} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Contact />
      </section>
      <Divider />
    </div>
  );
}
