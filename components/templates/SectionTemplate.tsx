import { Children, PropsWithChildren } from "react";

const SectionTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  const [heading, ...otherChildren] = Children.toArray(children);

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="text-3xl">{heading}</div>
      {otherChildren?.map((child, index) => <div key={index}>{child}</div>)}
    </div>
  );
};

export default SectionTemplate;
