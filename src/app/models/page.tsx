import { bedrockClientListModels } from "../lib/action";
import ModelCardList from "../ui/ModelList";

export default async function ModelPage() {
  const { metadata, modelSummaries } = await bedrockClientListModels();
  return (
    <main>
      <p>Model Page</p>
      <div>{modelSummaries && <ModelCardList models={modelSummaries} />}</div>
    </main>
  );
}
