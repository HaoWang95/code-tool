import { FoundationModelSummary } from "@aws-sdk/client-bedrock";
import { COMMON_TEXT_COLOR } from "../lib/constant";

/**
 * ModelCard is a presentation-only component
 * @param data: FoundationModelSummary
 * @returns
 */
const ModelCard = ({ data }: { data: FoundationModelSummary }) => {
  const onhoverStyle =
    "rounded-lg overflow-hidden shadow-lg bg-white p-4 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl";
  return (
    <div className={onhoverStyle}>
      <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
        {data.modelName}
      </h3>
      <div className="text-sm divide-y divide-gray-200">
        {[
          {
            label: "Provider",
            value: data.providerName,
          },
          { label: "Model ID", value: data.modelId },
          {
            label: "Status",
            value: data.modelLifecycle?.status,
          },
          {
            label: "Inference Types",
            value: data.inferenceTypesSupported?.join(", "),
          },
          {
            label: "Input Modalities",
            value: data.inputModalities?.join(", "),
          },
          {
            label: "Output Modalities",
            value: data.outputModalities?.join(", "),
          },
          {
            label: "Streaming Supported",
            value: data.responseStreamingSupported ? "Yes" : "No",
          },
        ].map(({ label, value }, index) => (
          <div key={`${label}-${index}`} className="py-2 flex justify-between items-center">
            <span className={`font-semibold ${COMMON_TEXT_COLOR.TEAL}`}>
              {label}:
            </span>
            <span className="text-gray-600">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelCard;
