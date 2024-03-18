import { bedrockClientListModels } from "../lib/action";
import ModelCardList from "../ui/ModelList";
import { lusitana } from "../ui/font";

export default async function ModelPage() {
    
  const { modelSummaries } = await bedrockClientListModels();

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} text-xl md:text-2xl mb-4`}>
        AWS Gen AI Models
      </h1>
      <div>{modelSummaries && <ModelCardList models={modelSummaries} />}</div>
    </div>
  );
}
