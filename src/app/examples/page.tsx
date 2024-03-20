import { IoTerminalOutline } from "react-icons/io5";
import ExampleCard from "../ui/examples/ExampleCard";
import { lusitana } from "../ui/font";

export default function ExamplesPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} text-xl md:text-2xl mb-4`}>
        Examples
      </h1>
      <div className="w-full">
        <ExampleCard
          title="Code check"
          content="Duplicate code checking for your code snippet"
          icon={<IoTerminalOutline className="h-6 w-6" />}
          linkTo="/examples/duplicate"
        />
      </div>
    </main>
  );
}
