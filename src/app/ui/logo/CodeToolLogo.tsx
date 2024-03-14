import { CommandLineIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../font";

export default function CodeToolLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <CommandLineIcon className="w-12 h-12" />
      <p className="text-[40px]">Code Tool</p>
    </div>
  );
}
