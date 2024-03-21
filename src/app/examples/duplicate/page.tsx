import CodeFileReader from "@/app/ui/examples/CodeFileReader";
import { lusitana } from "@/app/ui/font";

export default async function DuplicateCodePage({params}: {params: string}) {
  return (
    <div className="w-full">
      <div>
        <h1 className={`${lusitana.className} text-xl md:text-2xl mb-4`}>
          Duplicate code checker
        </h1>
      </div>
      <div className="w-full">
        <CodeFileReader />
      </div>
    </div>
  );
}
