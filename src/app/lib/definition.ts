import { FoundationModelSummary } from "@aws-sdk/client-bedrock";

export type ModelCardData = {
  modelName?: string | undefined;
  providerName?: string | undefined;
  modelLifecycle: { status: string | undefined } | undefined;
  modelId: string | undefined;
  inferenceTypesSupported?: [];
  inputModalities?: [];
  outputModalities?: [];
  responseStreamingSupported?: any;
};

export type ModelCardListData = {
    models: FoundationModelSummary[]
}