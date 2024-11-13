import NameTag from "../atom/NameTag";

const TestimonialCard = ({ name, designation, comment }: TestimonialCard) => {
  return (
    <div className="flex flex-col gap-4 p-8 border-1 rounded-lg border-gray-4">
      <div className="font-maison-light text-base xl:text-lg italic">{`" ${comment} "`}</div>
      <NameTag designation={designation} name={name} />
    </div>
  );
};

export default TestimonialCard;
