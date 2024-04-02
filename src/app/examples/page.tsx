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
          title="Code check for 2 files"
          content="Quick code analysis if you want to find duplicate code snippet or refactoring suggestions among two files"
          icon={<BiCommentEdit className="h-6 w-6" />}
          linkTo="/examples/comment"
        />
      </div>
    </div>
  );
}
