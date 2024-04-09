import { ReactNode } from "react";
import { lusitana } from "../font";
import { bedrockClientListModels, openAIListModels } from "@/app/lib/action";

export async function InformationCard({
  title,
  icon,
}: {
  title: string;
  // value: string;
  icon?: ReactNode;
}) {
  const numberOfModels = async () => {
    if (title === "AWS") {
      const { numberOfModels } = await bedrockClientListModels();
      return numberOfModels;
    }
    if (title === "OpenAI") {
      const { numberOfModelsOpenAI } = await openAIListModels();
      return numberOfModelsOpenAI;
    }
  };
  const value = await numberOfModels();
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {icon}
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
