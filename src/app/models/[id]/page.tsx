import { bedrockClientGetModelDetail } from "@/app/lib/action";
import BreadScrumbs from "@/app/ui/examples/BreadScrumbs";
import { lusitana } from "@/app/ui/font";

/**
 * Server component ModelDetail
 */
export default async function ModelDetail({
  params,
}: {
  params: { id: string };
}) {
  const decodedModelId = decodeURIComponent(params?.id as string);

  const modelDetail = await bedrockClientGetModelDetail({
    modelId: decodedModelId,
  });

  return (
    <div className="w-full">
      <BreadScrumbs
        breadScrumbs={[
          { title: "Models", href: "/models" },
          {
            title: `Model: ${decodedModelId}`,
            href: `/models/${decodedModelId}`,
            active: true,
          },
        ]}
      />
      <div className="w-full">
        <h1 className={lusitana.className}>Fetch model item details</h1>
        <div>{modelDetail.modelDetails?.inferenceTypesSupported}</div>
      </div>
    </div>
  );
}
