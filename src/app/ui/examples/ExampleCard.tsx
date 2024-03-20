import Link from "next/link";
import { ReactNode } from "react";

export default function ExampleCard({
  title,
  content,
  icon,
  linkTo,
}: {
  title: string;
  content: string;
  icon: ReactNode;
  linkTo: string;
}) {
  return (
    <div className="flex">
      <div className="w-full max-w-xs rounded overflow-hidden shadow-lg bg-white p-6 m-4 flex flex-col justify-between transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className="flex space-x-4 items-center mb-4">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex-1">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base">{content}</p>
          </div>
        </div>
        <Link href={linkTo} passHref>
          <div className="inline-block w-full text-center bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors cursor-pointer">
            Try
          </div>
        </Link>
      </div>
    </div>
  );
}
