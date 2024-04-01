
export default function DuplicateCodeResult({ code }: { code: string }) {
  return (
    <>
      {code && (
        <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto min-w-full text-sm whitespace-pre-wrap h-96 overflow-y-auto">
          <code>{code}</code>
        </pre>
      )}
    </>
  );
}
