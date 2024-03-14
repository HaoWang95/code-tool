import ModelCardList from "./ui/ModelList";
import Link from "next/link";
import { ModelCardListSkeleton } from "@/app/ui/Skeleton";
import { Suspense } from "react";
import CodeToolLogo from "./ui/logo/CodeToolLogo";

export default async function Home() {
  return (
    <main
      className="flex min-h-screen flex-col p-6"
      // className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-600 p-4 md:h-22">
        <Link href={"/"}>
          <CodeToolLogo />
        </Link>
      </div>

      <Suspense
        key={"models-loading"}
        fallback={<ModelCardListSkeleton count={12} />}
      >
        <ModelCardList />
      </Suspense>
    </main>
  );
}
