import { Link } from "react-router-dom";

export default function Breadcrumbs({ paths }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {path.to ? (
              <Link
                to={path.to}
                className="text-blue-600 hover:underline font-medium"
              >
                {path.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-800">
                {path.label}
              </span>
            )}
            {index < paths.length - 1 && (
              <span className="mx-2 text-gray-400">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
