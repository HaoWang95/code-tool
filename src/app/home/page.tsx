import { CpuChipIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../ui/font";
import { InformationCard } from "../ui/home/InformationCard";
import { bedrockClientListModels, openAIListModels } from "../lib/action";

export default async function HomePage() {
  // total number of AWS GenAI models
  const { numberOfModels } = await bedrockClientListModels();
  const { numberOfModelsOpenAI } = await openAIListModels();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Home</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <InformationCard
          key={`aws-infocard`}
          title={"AWS"}
          value={numberOfModels.toString()}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
        <InformationCard
          key={`openai-infocard`}
          title={"Open AI"}
          value={numberOfModelsOpenAI.toString()}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
        {/* <InformationCard
          title={"Azure"}
          value={"12"}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        />
        <InformationCard
          title={"Google Cloud"}
          value={"12"}
          icon={<CpuChipIcon className="h-5 w-5 text-gray-700" />}
        /> */}
      </div>
    </div>
  );
}
