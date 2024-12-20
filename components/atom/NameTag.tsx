import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

const NameTag = ({ name, designation, photoUrl, linkedin }: NameTag) => {
  return (
    <div className="flex gap-4">
      <Avatar isBordered color="primary" src={photoUrl} />
      <Link
        className="flex flex-col gap-1 cursor-pointer"
        href={linkedin}
        rel="noreferrer"
        target="_blank"
      >
        <span className="text-base hover:underline">{name}</span>
        <span className="text-xs text-gray-8">{designation}</span>
      </Link>
    </div>
  );
};

export default NameTag;
