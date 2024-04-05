import clsx from "clsx";
import { lusitana } from "../font";
import Link from "next/link";

interface BreadScrumbType {
  title: string;
  href: string;
  active?: boolean;
}

const BreadScrumbs = ({
  breadScrumbs,
}: {
  breadScrumbs: BreadScrumbType[];
}) => {
  return (
    <nav aria-label="sub-nav" className="mb-6 block">
      <ol className={clsx(lusitana.className, "flex text-xl mb:text-2xl")}>
        {breadScrumbs.map((item, index) => (
          <div key={`div-${item.href}`} className="flex flex-row gap-2">
            <li
              key={item.href}
              aria-current={item.active}
              className={clsx(
                item.active ? "text-gray-800" : "text-gray-500",
                "hover:text-gray-900 hover:scale-105 trasition duration-200"
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
            {index < breadScrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </div>
        ))}
      </ol>
    </nav>
  );
};

export default BreadScrumbs;
