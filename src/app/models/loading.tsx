import { ModelCardListSkeleton } from "../ui/Skeleton";
import { lusitana } from "../ui/font";

export default function ModelLoading() {
  return (
    <>
      <div className="w-full">
        <h1 className={`${lusitana.className} text-xl md:text-2xl mb-4`}>
          Loading AWS Gen AI Models...
        </h1>
        <div>
          <ModelCardListSkeleton />
        </div>
      </div>
    </>
  );
}
