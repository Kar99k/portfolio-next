import { Divider } from "@nextui-org/divider";

import IntroContent from "@/components/organism/IntroContent";
import Works from "@/components/organism/Works";
import Testimonials from "@/components/organism/Testimonials";
import Contact from "@/components/organism/Contact";
import TechStack from "@/components/organism/TechStack";
import Blogs from "@/components/organism/Blogs";

export default function Home() {
  return (
    <div>
      <section className="container mx-auto ">
        <IntroContent />
      </section>
      <Divider />

      <section className="container mx-auto">
        <TechStack />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Works buttonVisible={true} perPage={3} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Testimonials />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Blogs buttonVisible={true} perPage={3} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Contact />
      </section>
      <Divider />
    </div>
  );
}
