"use client";
import React, { useState, ChangeEvent } from "react";

const CodeFileReader = () => {
  const [codeContent, setCodeContent] = useState<string>("");
  const [codeType, setCodeType] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileNameSplit = file.name.split(".");
      if (fileNameSplit.length > 0) {
        setCodeType(fileNameSplit.pop() || "");
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setCodeContent(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
        Upload a code file
        <input
          type="file"
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          onChange={handleFileChange}
          //accept=".js,.ts,.jsx,.tsx,.html,.css" // Specify acceptable file types
        />
      </label>
      {codeContent && (
        <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">
          <code>{codeContent}</code>
        </pre>
      )}
    </div>
  );
};

export default CodeFileReader;
