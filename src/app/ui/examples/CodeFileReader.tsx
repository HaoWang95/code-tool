"use client";

import { AWS_REGION } from "@/app/lib/constant";
import { prepareModelRequestClaude2 } from "@/app/lib/utils";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";

const CodeFileReader = () => {
  const [codeContent, setCodeContent] = useState<string>("");
  const [codeCheckResult, setCodeCheckResult] = useState<string>();
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileNameSplit = file.name.split(".");
      if (fileNameSplit.length > 0) {
        // setLanguage(fileNameSplit.pop() || "");
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setCodeContent(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const codeSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (codeContent && codeContent.trim().length > 0) {
        console.log("code submit!");
        const bedrockRuntime = new BedrockRuntimeClient({
          region: AWS_REGION,
          credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
            secretAccessKey:
              process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
          },
        });

        const prompt = prepareModelRequestClaude2(codeContent);
        const invokeModel = new InvokeModelCommand(prompt);
        const response = await bedrockRuntime.send(invokeModel);
        const responseJsonString = new TextDecoder().decode(response.body);
        const parsedResponse = JSON.parse(responseJsonString);
        setCodeCheckResult(parsedResponse["completion"]);
      }
    },
    [codeContent]
  );

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={codeSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Upload a code file
            <input
              type="file"
              id="codeFile"
              name="codeFile"
              className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
              onChange={handleFileChange}
              //accept=".js,.ts,.jsx,.tsx,.html,.css" // Uncomment to specify acceptable file types
            />
          </label>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Submit Code
          </button>
        </form>
      </div>
      {/* {language.trim().length > 0 && (
        <div className="my-4 p-2 bg-teal-100 rounded-lg border border-teal-400">
          <p className="text-teal-800 font-semibold">
            Detected Language: {language.toUpperCase()}
          </p>
        </div>
      )} */}

      {codeContent && (
        <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">
          <code>{codeContent}</code>
        </pre>
      )}
      {codeCheckResult && (
        <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">
          <code>{codeCheckResult}</code>
        </pre>
      )}
    </div>
  );
};

export default CodeFileReader;
