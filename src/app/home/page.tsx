import { lusitana } from "../ui/font";

export default async function HomePage() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Home</h1>
      </div>
    </div>
  );
}
