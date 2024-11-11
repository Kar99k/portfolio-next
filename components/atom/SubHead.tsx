const SubHead = ({ subtitle, heading }: HeadingProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-gray-8 font-maison-bold">{subtitle}</p>
      <span className="text-xl font-maison-demi-bold">{heading}</span>
    </div>
  );
};

export default SubHead;
