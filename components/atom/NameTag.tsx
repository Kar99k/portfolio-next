import { Avatar } from "@nextui-org/avatar";

const NameTag = ({ name, designation }: NameTag) => {
  return (
    <div className="flex gap-4">
      <Avatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
      />
      <div className="flex flex-col gap-1">
        <span className="text-base ">{name}</span>
        <span className="text-xs text-gray-8">{designation}</span>
      </div>
    </div>
  );
};

export default NameTag;
