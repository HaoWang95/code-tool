import { CpuChipIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../ui/font";
import { InformationCard } from "../ui/home/InformationCard";
import { Suspense } from "react";
import { InformationCardSkeleton } from "../ui/Skeleton";

export default async function HomePage() {
  // total number of AWS GenAI models
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Home</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<InformationCardSkeleton />}>
          <InformationCard
            key={`aws-infocard`}
            title={"AWS"}
            icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
          />
        </Suspense>
        <Suspense fallback={<InformationCardSkeleton />}>
          <InformationCard
            key={`openai-infocard`}
            title={"OpenAI"}
            icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
          />
        </Suspense>
      </div>
    </div>
  );
}
