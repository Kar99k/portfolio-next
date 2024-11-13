const SubHead = ({ category, title }: HeadingProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-gray-8 font-maison-bold">{category}</p>
      <span className="text-xl font-maison-demi-bold">{title}</span>
    </div>
  );
};

export default SubHead;
