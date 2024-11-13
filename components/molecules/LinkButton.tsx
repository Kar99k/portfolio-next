import Link from "next/link";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";

export default function LinkButtons() {
  return (
    <div className="flex flex-row gap-2">
      {siteConfig.links.map((item, index) => (
        <Link key={index} href={item.link} target="_blank">
          <Button
            key={index}
            className="h-12"
            startContent={<item.icon />}
            variant="bordered"
          />
        </Link>
      ))}
    </div>
  );
}
