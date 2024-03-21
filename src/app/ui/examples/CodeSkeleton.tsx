const CodeSnippetSkeleton = () => (
  <div className="animate-pulse flex flex-col space-y-2 w-full max-w-lg">
    <div className="h-6 bg-gray-300 rounded"></div>{" "}
    {/* Simulate a line of code */}
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div> // Simulate subsequent lines of code
    ))}
  </div>
);

export default CodeSnippetSkeleton