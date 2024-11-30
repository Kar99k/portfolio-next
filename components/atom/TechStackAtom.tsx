import StackIcon from "tech-stack-icons";

const TechStackAtom = ({ iconName, title }: TechStackAtomProps) => {
  return (
    <div className="flex gap-4 items-center justify-center p-4">
      <div className="size-8">
        <StackIcon name={iconName} style={{ width: "100%", height: "100%" }} />
      </div>

      <span className="text-xl">{title}</span>
    </div>
  );
};

export default TechStackAtom;
