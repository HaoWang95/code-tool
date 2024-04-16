import { BedrockClient } from "@aws-sdk/client-bedrock";
import { AWS_REGION } from "./constant";
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
import OpenAI from "openai";

const GlobalBedrockClient = new BedrockClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
  },
});

const GlobalBedrockRuntimeClient = new BedrockRuntimeClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
  },
});

const GlobalOpenAIClient = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY || "", dangerouslyAllowBrowser: true
});

export { GlobalBedrockClient, GlobalBedrockRuntimeClient, GlobalOpenAIClient };
