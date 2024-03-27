"use server";
import {
  BedrockClient,
  ListFoundationModelsCommand,
} from "@aws-sdk/client-bedrock";
import { AWS_REGION } from "./constant";

/**
 * Integrate with aws bedrock client to fetch summaries of foundation models
 * @returns FoundationModelsSummary[]
 */
export const bedrockClientListModels = async () => {
  try {
    const bedrockClient = new BedrockClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
      },
    });
    const input = {
      // byProvider: 'STRING_VALUE',
      // byCustomizationType: 'FINE_TUNING' || 'CONTINUED_PRE_TRAINING',
      // byOutputModality: 'TEXT' || 'IMAGE' || 'EMBEDDING',
      // byInferenceType: 'ON_DEMAND' || 'PROVISIONED',
    };
    const command = new ListFoundationModelsCommand(input);
    const result = await bedrockClient.send(command);
    return {
      metadata: result.$metadata,
      modelSummaries: result.modelSummaries,
      numberOfModels: result.modelSummaries?.length || 0,
    };
  } catch (error) {
    throw error;
  }
};

export const checkCode = async (formData: FormData) => {
  const file = formData.get("codeFile");
  console.log(file);
}
