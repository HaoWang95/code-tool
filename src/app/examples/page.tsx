import { IoTerminalOutline } from "react-icons/io5";
import ExampleCard from "../ui/examples/ExampleCard";
import { lusitana } from "../ui/font";
import clsx from "clsx";
import { BiCommentEdit } from "react-icons/bi";

export default async function ExamplesPage() {
  return (
    <div className="w-full">
      <h1 className={clsx(lusitana.className, "text-xl md:text-2xl mb-4")}>
        Examples
      </h1>
      <div className="w-full flex flex-row justify-evenly">
        <ExampleCard
          title="Code check"
          content="Duplicate code checking for your code snippet."
          icon={<IoTerminalOutline className="h-6 w-6" />}
          linkTo="/examples/duplicate"
        />
        <ExampleCard
          title="Code comment"
          content="Quick code analysis and explain for your code snippet"
          icon={<BiCommentEdit className="h-6 w-6" />}
          linkTo="/examples/comment"
        />
      </div>
    </div>
  );
}
