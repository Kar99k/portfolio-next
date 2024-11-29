import Blogs from "@/components/organism/Blogs";

const page = () => {
  return (
    <section className="container mx-auto max-w-screen-xl xl:py-8">
      <Blogs buttonVisible={false} />
    </section>
  );
};

export default page;
