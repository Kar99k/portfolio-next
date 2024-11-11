import ThumbNail from "../molecules/ThumbNail";
import SectionTemplate from "../templates/SectionTemplate";

const Works = () => {
  return (
    <SectionTemplate>
      <div className="text-3xl">Featured Works</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <ThumbNail
          thumbnailUrl="/image/avatar.png"
          heading="Heading"
          subtitle="yo"
        />
        <ThumbNail
          thumbnailUrl="/image/avatar.png"
          heading="Heading"
          subtitle="yo"
        />
        <ThumbNail
          thumbnailUrl="/image/avatar.png"
          heading="Heading"
          subtitle="yo yo"
        />
      </div>
    </SectionTemplate>
  );
};

export default Works;
