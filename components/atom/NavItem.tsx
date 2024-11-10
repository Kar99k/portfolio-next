import Link from "next/link";

const NavItem = ({ name, Icon, href }: NavItem) => {
  return (
    <Link
      className="flex gap-2 py-5 px-8 border-b-1 border-gray-4  h-full"
      href={href}
    >
      <Icon color="gray" size={20} />
      <div className="text-base text-gray-8">{name}</div>
    </Link>
  );
};

export default NavItem;
