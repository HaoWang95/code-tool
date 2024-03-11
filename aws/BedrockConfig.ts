import { BedrockClient } from "@aws-sdk/client-bedrock";

export const bedrockClient = new BedrockClient({
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});
