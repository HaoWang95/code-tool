import React from "react";
import clsx from "clsx";
import { lusitana } from "./font";

export function ModelCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>{" "}
      {/* Model Name Placeholder */}
      <div className="h-4 bg-gray-200 rounded mb-1 w-1/2"></div>{" "}
      {/* Provider Placeholder */}
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 12 }).map(
          (
            _,
            index // For other key-value pairs
          ) => (
            <div
              key={`ModelCardSkeleton-item-${index}`}
              className={`h-4 bg-gray-200 rounded mb-1 ${
                index % 2 === 0 ? "w-5/12" : "w-7/12"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
}

const ModelCardSkeletonLoading = () => {
  const onhoverStyle =
    "rounded-lg overflow-hidden shadow-lg bg-white p-4 transition duration-200 ease-in-out transform";
  return (
    <div className={onhoverStyle}>
      {/* Skeleton for Model Name */}
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded mb-4"></div>{" "}
        {/* Placeholder for the model name */}
        <div className="space-y-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={`model-card-${index}`}
              className="flex justify-between items-center"
            >
              {/* Each label and value pair */}
              <div
                key={`model-card-${index}-first`}
                className="w-1/3 bg-gray-200 h-4 rounded"
              ></div>{" "}
              {/* Placeholder for the label */}
              <div
                key={`model-card-${index}-second`}
                className="w-1/2 bg-gray-200 h-4 rounded"
              ></div>{" "}
              {/* Placeholder for the value */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function ModelCardListSkeleton({ count = 6 }) {
  // Default to 5 skeletons
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <>
            <ModelCardSkeletonLoading key={`modelcard-loading-${index}`} />
          </>
        ))}
      </div>
    </div>
  );
}

interface BreadScrumbType {
  title: string;
  href: string;
  active?: boolean;
}

export const BreadScrumbSkeleton = () => {
  // Generate some dummy data for placeholders
  const dummyBreadScrumb = Array.from({ length: 2 }).map((_, index) => ({
    title: "",
    href: `#${index}`,
    active: false,
  }));

  return (
    <nav aria-label="sub-nav" className="mb-6 block">
      <ol className={clsx(lusitana.className, "flex text-xl mb:text-2xl")}>
        {dummyBreadScrumb.map((item, index) => (
          <div key={`div-${index}`} className="flex flex-row gap-2">
            <li
              key={index}
              aria-current={item.active}
              className={clsx(
                item.active ? "text-gray-800" : "text-gray-500",
                "animate-pulse" // Apply pulse animation to simulate loading
              )}
            >
              <div className="w-20 h-5 bg-gray-200 rounded-full">loading...</div>{" "}
            </li>
            {index < dummyBreadScrumb.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </div>
        ))}
      </ol>
    </nav>
  );
};
