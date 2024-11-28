const SubHead = ({ category, title, time }: HeadingProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-gray-8 font-maison-bold">{category}</p>
      <span className="text-xl font-maison-demi-bold hover:text-orange-10">
        {title}
      </span>
      {time && <span className="text-sm text-gray-8">{time}</span>}
    </div>
  );
};

export default SubHead;
