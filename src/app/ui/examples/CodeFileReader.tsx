"use client";

import { AWS_REGION } from "@/app/lib/constant";
import { prepareModelRequestClaude2 } from "@/app/lib/utils";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CodeSnippetSkeleton from "./CodeSkeleton";

const CodeFileReader = () => {
  const [codeContent, setCodeContent] = useState<string>("");
  const [codeCheckResult, setCodeCheckResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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

  const codeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (codeContent && codeContent.trim().length > 0) {
      const bedrockRuntime = new BedrockRuntimeClient({
        region: AWS_REGION,
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
        },
      });

      const prompt = prepareModelRequestClaude2(codeContent);
      const invokeModel = new InvokeModelCommand(prompt);
      await bedrockRuntime.send(invokeModel).then((response) => {
        const responseJsonString = new TextDecoder().decode(response.body);
        const parsedResponse = JSON.parse(responseJsonString);
        setCodeCheckResult(parsedResponse["completion"]);
        setLoading(false);
      });
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={codeSubmit} className="flex flex-row gap-2">
          <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
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
            onClick={() => setLoading(true)}
            type="submit"
            className="mt-6 px-4 py-2 bg-teal-500 text-white text-sm font-semibold h-10 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Submit Code
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* refactor in to one component */}
        {codeContent && (
          <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto min-w-full text-sm whitespace-pre-wrap h-96 overflow-y-auto">
            <code>{codeContent}</code>
          </pre>
        )}
        {codeCheckResult && !loading && (
          <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto min-w-full text-sm whitespace-pre-wrap h-96 overflow-y-auto">
            <code>{codeCheckResult}</code>
          </pre>
        )}
      </div>

      {loading && <CodeSnippetSkeleton />}
    </div>
  );
};

export default CodeFileReader;
