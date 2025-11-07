import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";

interface BreadcrumbsProps {
  current: string;
  parent?: { label: string; href: string };
}

export default function Breadcrumbs({ current, parent }: BreadcrumbsProps) {
  return (
    <div className="mb-4 pt-20 container items-center max-w-6xl px-8 mx-auto xl:px-5" aria-label="Breadcrumb">
      <ol className="flex flex-wrap text-sm text-gray-700">
        
        {/* Home */}
        <li className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center font-medium hover:text-gray-900"
          >
            <FiHome className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>

        {/* Parent (opcional) */}
        {parent && (
          <li className="flex items-center">
            <FiChevronRight className="mx-2 text-gray-400" />
            <Link
              href={parent.href}
              className="font-medium text-gray-800 hover:text-gray-900"
            >
              {parent.label}
            </Link>
          </li>
        )}

        {/* Current Page */}
        <li className="flex items-center" aria-current="page">
          <FiChevronRight className="mx-2 text-gray-400" />
          <span className="font-medium text-gray-500">
            {current}
          </span>
        </li>

      </ol>
    </div>
  );
}
