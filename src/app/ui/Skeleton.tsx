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

export function ModelCardListSkeleton({ count = 12 }) {
  // Default to 5 skeletons
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <ModelCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
