import { Chip } from "@nextui-org/chip";
import Link from "next/link";
import DesktopMenu from "../molecules/DesktopMenu";
import MobileMenu from "../molecules/MobileMenu";

const NavBar = () => {
  return (
    <div className="border-gray-4 border-r-1 xl:h-dvh xl:w-[340px]">
      <div className="flex justify-between border-gray-4 border-b-1">
        <div className="flex gap-2 items-center p-6 w-full">
          <Link className="text-xl" href="/">
            Karthikeyan’s
          </Link>
          <span>
            <Chip
              classNames={{
                base: "bg-orange-3",
                content: "text-orange-10 text-sm",
              }}
              radius="sm"
            >
              Space
            </Chip>
          </span>
        </div>
        <MobileMenu />
      </div>

      <DesktopMenu />
    </div>
  );
};

export default NavBar;
