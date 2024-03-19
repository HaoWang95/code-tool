import { CpuChipIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../ui/font";
import { InformationCard } from "../ui/home/InformationCard";

export default async function HomePage() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Home</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <InformationCard
          title={"AWS"}
          value={"12"}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
        <InformationCard
          title={"Open AI"}
          value={"12"}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
        <InformationCard
          title={"Azure"}
          value={"12"}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
        <InformationCard
          title={"Google Cloud"}
          value={"12"}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
      </div>
    </div>
  );
}
