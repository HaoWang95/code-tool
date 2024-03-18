"use client";
import { FoundationModelSummary } from "@aws-sdk/client-bedrock";
import { ITEMS_PER_PAGE } from "../lib/utils";
import ModelCard from "./ModelCard";
import Pagination from "./Pagination";
import { useState } from "react";

/**
 * The ModelPage is considered a server component
 * But ModelCardList is a presentational component and can be resolved on client end
 */
export default function ModelCardList({
  models,
}: {
  models: FoundationModelSummary[];
}) {
  const totalPages = models?.length
    ? Math.ceil(models.length / ITEMS_PER_PAGE)
    : 0;

  const [currentPage, setCurrentPage] = useState(1);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage * ITEMS_PER_PAGE;
  const displayedModels = models?.slice(start, end);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedModels?.map((model, index) => (
          <ModelCard key={`${model.modelName}-${index}`} data={model} />
        ))}
      </div>
      <div className="mt-4 flex w-full justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
