// src/components/Breadcrumbs.js
import { Link } from "react-router-dom";

export default function Breadcrumbs({ paths = [] }) {
  if (!paths || paths.length === 0) return null;

  return (
    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {paths.map((item, index) => {
          const isLast = index === paths.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-1 text-gray-400">›</span>}

              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="hover:underline text-brand-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-700">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
