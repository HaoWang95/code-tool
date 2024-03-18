import { FoundationModelSummary } from "@aws-sdk/client-bedrock";
import { bedrockClientListModels } from "../lib/action";
import { ITEMS_PER_PAGE } from "../lib/utils";
import ModelCard from "./ModelCard";
import Pagination from "./Pagination";

export default async function ModelCardList({
  models
}: {
    models: FoundationModelSummary[]  
}) {
//   const modelSummaries = await bedrockClientListModels();
//   const models = modelSummaries.modelSummaries;
//   const totalPages = models?.length
//     ? Math.ceil(models.length / ITEMS_PER_PAGE)
//     : 0;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {models?.map((model) => (
          <ModelCard key={`${model.modelName}`} data={model} />
        ))}
      </div>
      {/* <div className="mt-4 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
