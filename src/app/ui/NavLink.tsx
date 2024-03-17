"use client";
import {
  HomeIcon,
  InformationCircleIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Links might be stored in a db if application size sprawns too large
const links = [
  { name: "Home", href: "/home", icon: HomeIcon },
  {
    name: "Models",
    href: "/models",
    icon: InformationCircleIcon,
  },
  { name: "Tools", href: "/tools", icon: CommandLineIcon },
];

export default function NavLinks() {
  // the pathname would be the current path name
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-green-100 text-green-600": pathname === link.href,
              }
            )}
            //className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
