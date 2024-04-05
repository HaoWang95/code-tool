import { BreadScrumbSkeleton, ModelCardSkeleton } from "@/app/ui/Skeleton";

export default function ModelDetailLoading() {
  return (
    <div className="w-full">
      <BreadScrumbSkeleton />
      <div>
        <ModelCardSkeleton />
      </div>
    </div>
  );
}
