import Blogs from "@/components/organism/Blogs";

const page = () => {
  return (
    <section className="container mx-auto">
      <Blogs buttonVisible={false} />
    </section>
  );
};

export default page;
