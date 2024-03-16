import Link from "next/link";
import CodeToolLogo from "./logo/CodeToolLogo";
import NavLinks from "./NavLink";
import { PowerIcon } from "@heroicons/react/24/outline";

export function Nav() {
  return (
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-teal-500 p-4 md:h-22 hover:bg-teal-600">
      <Link href={"/"}>
        <CodeToolLogo />
      </Link>
    </div>
  );
}

export function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <CodeToolLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
