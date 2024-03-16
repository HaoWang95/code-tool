"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { generatePagination } from "../lib/utils";
import { useSearchParams } from "next/navigation";

/**
 * Pagination should be a client side component
 * @param totalPages: number, the count of aws gen ai models
 * @returns
 */
export default function Pagination({ totalPages }: { totalPages: number }) {
  const currentPage = 1;
  const searchParams = useSearchParams();
  const currentPageNumber = Number(searchParams.get("page")) | 0;
  const allPages = generatePagination(1, totalPages);
  return (
    <>
      <div className="inline-flex">
        <PaginationArrow direction="left" isDisabled={currentPage <= 1} />
        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                href={""}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>
        <PaginationArrow
          direction="right"
          isDisabled={currentPage === totalPages}
        />
      </div>
    </>
  );
}

const PaginationArrow = ({
  direction,
  isDisabled,
}: {
  direction: "left" | "right";
  isDisabled: boolean;
}) => {
  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );
  //   if not disabled, use setPageNumber to update state
  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <span className={className}>{icon}</span>
  );
};

const PaginationNumber = ({
  position,
  isActive,
  href,
  page,
}: {
  position: "first" | "single" | "last" | "middle" | undefined;
  isActive: boolean;
  href: string;
  page: number | string;
}) => {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-green-500 border-green-500 text-white": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <a href={href} className={className}>
      {page}
    </a>
  );
};
