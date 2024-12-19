import { Divider } from "@nextui-org/divider";

import IntroContent from "@/components/organism/IntroContent";
import Works from "@/components/organism/Works";
import Testimonials from "@/components/organism/Testimonials";
import Contact from "@/components/organism/Contact";
import TechStack from "@/components/organism/TechStack";
import Blogs from "@/components/organism/Blogs";
import { fetchBlogsData } from "@/services/fetchBlogs";
import { fetchWorksData } from "@/services/fetchWorks";

export const revalidate = 3600;

export default async function Home() {
  const blogs = await fetchBlogsData();
  const works = await fetchWorksData();

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
        <Works buttonVisible={true} perPage={3} works={works} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Testimonials />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Blogs blogs={blogs} buttonVisible={true} perPage={3} />
      </section>
      <Divider />

      <section className="container mx-auto">
        <Contact />
      </section>
    </div>
  );
}
