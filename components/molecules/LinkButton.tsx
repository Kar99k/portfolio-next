import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function LinkButtons() {
  return (
    <div className="flex flex-row gap-4">
      {siteConfig.links.map((item, index) => (
        <Link
          key={index}
          className="p-4 border-[1px] border-zinc-800 rounded-xl hover:bg-zinc-900"
          href={item.link}
          target="_blank"
        >
          <item.icon />
        </Link>
      ))}
    </div>
  );
}
