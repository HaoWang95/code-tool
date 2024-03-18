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
              key={index}
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
            <div key={index} className="flex justify-between items-center">
              {/* Each label and value pair */}
              <div className="w-1/3 bg-gray-200 h-4 rounded"></div>{" "}
              {/* Placeholder for the label */}
              <div className="w-1/2 bg-gray-200 h-4 rounded"></div>{" "}
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
            <ModelCardSkeletonLoading key={index} />
          </>
        ))}
      </div>
    </div>
  );
}
