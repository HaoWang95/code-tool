import CodeFileReader from "@/app/ui/examples/CodeContentReader";
import { lusitana } from "@/app/ui/font";

export default function DuplicateCodePage() {
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
