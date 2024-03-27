const CodeSnippetSkeleton = () => (
  <div className="animate-pulse flex flex-col space-y-2 w-full min-w-full mt-4 p-4">
    <div className="h-6 bg-gray-300 rounded" /> {/* Simulate a line of code */}
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index} className="h-4 bg-gray-200 rounded w-full mx-auto" /> // Simulate subsequent lines of code
    ))}
  </div>
);

export default CodeSnippetSkeleton;
