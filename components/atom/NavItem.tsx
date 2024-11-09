const NavItem = ({ name, Icon }: NavItem) => {
  return (
    <div className="flex gap-2 py-5 px-8 border-b-1 border-gray-4">
      <Icon size={20} color="gray" />
      <span className="text-base text-gray-8">{name}</span>
    </div>
  );
};

export default NavItem;
