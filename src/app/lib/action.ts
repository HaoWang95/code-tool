"use server";
import {
  GetFoundationModelCommand,
  ListFoundationModelsCommand,
} from "@aws-sdk/client-bedrock";
import { GlobalBedrockClient } from "./client";

/**
 * Integrate with aws bedrock client to fetch summaries of foundation models
 * @returns FoundationModelsSummary[]
 */
export const bedrockClientListModels = async () => {
  try {
    const input = {
      // byProvider: 'STRING_VALUE',
      // byCustomizationType: 'FINE_TUNING' || 'CONTINUED_PRE_TRAINING',
      // byOutputModality: 'TEXT' || 'IMAGE' || 'EMBEDDING',
      // byInferenceType: 'ON_DEMAND' || 'PROVISIONED',
    };
    const command = new ListFoundationModelsCommand(input);
    const result = await GlobalBedrockClient.send(command);
    return {
      metadata: result.$metadata,
      modelSummaries: result.modelSummaries,
      numberOfModels: result.modelSummaries?.length || 0,
    };
  } catch (error) {
    throw error;
  }
};

export const bedrockClientGetModelDetail = async ({
  modelId,
}: {
  modelId: string;
}) => {
  try {
    const modelDetailCommand = new GetFoundationModelCommand({
      modelIdentifier: modelId,
    });
    const result = await GlobalBedrockClient.send(modelDetailCommand);
    return result;
  } catch (error) {
    throw error;
  }
};
