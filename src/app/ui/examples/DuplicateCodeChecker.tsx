"use server";
export default async function DuplicateCodeChecker({ code }: { code: string }) {
  return (
    <>
      {code && (
        <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">
          <code>{code}</code>
        </pre>
      )}
    </>
  );
}
