"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { generatePagination } from "../lib/utils";
import React from "react";
import { lusitana } from "./font";

/**
 * Pagination should be a client side component, same reason as the ModelCardList component
 * @param totalPages: number, the count of aws gen ai models
 * @returns
 */
export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const allPages = generatePagination(currentPage, totalPages);
  return (
    <>
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          isDisabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        />
        {/* <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div> */}
        <div className="flex text-center mt-2">
          <p className={`${lusitana.className}`}>
            {currentPage} of {totalPages} pages
          </p>
        </div>
        <PaginationArrow
          direction="right"
          isDisabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        />
      </div>
    </>
  );
}

const PaginationArrow = ({
  direction,
  isDisabled,
  onClick,
}: {
  direction: "left" | "right";
  isDisabled: boolean;
  onClick: () => void;
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
    <span onClick={onClick} className={className}>
      {icon}
    </span>
  );
};

const PaginationNumber = ({
  position,
  isActive,
  page,
}: {
  position: "first" | "single" | "last" | "middle" | undefined;
  isActive: boolean;
  page: number | string;
}) => {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-teal-500 border-teal-500 text-white": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <span className={className}>{page}</span>
  );
};
