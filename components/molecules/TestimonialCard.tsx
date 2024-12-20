import NameTag from "../atom/NameTag";

const TestimonialCard = ({
  name,
  designation,
  comment,
  photoUrl,
  linkedin,
}: TestimonialCard) => {
  return (
    <div className="flex flex-col gap-4 p-8 border-1 rounded-lg border-gray-4 h-fit w-[420px]">
      <div className="font-maison-light text-base xl:text-lg italic h-fit">{`" ${comment} "`}</div>
      <NameTag
        designation={designation}
        linkedin={linkedin}
        name={name}
        photoUrl={photoUrl}
      />
    </div>
  );
};

export default TestimonialCard;
