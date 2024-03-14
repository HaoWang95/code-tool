import { bedrockClientListModels } from "../lib/action";
import ModelCard from "./ModelCard";

export default async function ModelCardList() {
  const modelSummaries = await bedrockClientListModels();
  const models = modelSummaries.modelSummaries;
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {models?.map((model) => (
          <ModelCard key={`${model.modelName}`} data={model} />
        ))}
      </div>
    </div>
  );
}
