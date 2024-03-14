import { FoundationModelSummary } from "@aws-sdk/client-bedrock";

/**
 * ModelCard is a presentation-only component
 * @param data: FoundationModelSummary
 * @returns 
 */
const ModelCard = ({ data }: { data: FoundationModelSummary }) => {
  const onhoverStyle = "rounded-lg overflow-hidden shadow-lg bg-white p-4 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl";
  return (
    <div 
      //className="rounded-lg overflow-hidden shadow-lg bg-white p-4"
      className={onhoverStyle}
      >
      <div className="mb-2 text-center">
        {/* <span className="font-bold text-blue-600">Model Name:</span> */}
        <span className="text-gray-600 ml-2">{data.modelName}</span>
      </div>
      <div className="text-sm leading-snug">
        <div>
          <span className="font-semibold text-blue-500">Provider:</span>
          <span className="text-gray-500 ml-2">{data.providerName}</span>
        </div>
        <div>
          <span className="font-semibold text-blue-500">Model ID:</span>
          <span className="text-gray-500 ml-2">{data.modelId}</span>
        </div>
        <div>
          <span className="font-semibold text-blue-500">Status:</span>
          <span className="text-gray-500 ml-2">
            {data?.modelLifecycle?.status}
          </span>
        </div>
        <div>
          <span className="font-semibold text-blue-500">Inference Types:</span>
          <span className="text-gray-500 ml-2">
            {data?.inferenceTypesSupported?.join(", ")}
          </span>
        </div>
        <div>
          <span className="font-semibold text-blue-500">Input Modalities:</span>
          <span className="text-gray-500 ml-2">
            {data.inputModalities?.join(", ")}
          </span>
        </div>
        <div>
          <span className="font-semibold text-blue-500">
            Output Modalities:
          </span>
          <span className="text-gray-500 ml-2">
            {data.outputModalities?.join(", ")}
          </span>
        </div>
        <div>
          <span className="font-semibold text-blue-500">
            Streaming Supported:
          </span>
          <span className="text-gray-500 ml-2">
            {data.responseStreamingSupported ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
