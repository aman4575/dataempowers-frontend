import React from "react";
import { Link } from "react-router-dom";
import { toUrl } from "../utils/helpers";

export default function ServiceCard({ service }) {
  const onepagerUrl = service.onepager ? toUrl(service.onepager) : null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">
        <Link to={`/services/${service.slug}`} className="hover:underline">
          {service.title}
        </Link>
      </h3>
      <p className="text-gray-700 mb-4">
        {service.summary?.length > 140
          ? service.summary.slice(0, 140) + "…"
          : service.summary}
      </p>

      <div className="flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="text-sm text-blue-600 hover:underline"
        >
          Learn more →
        </Link>

        {onepagerUrl ? (
          <a
            href={onepagerUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-600"
          >
            📄 One-pager
          </a>
        ) : (
          <span className="text-xs text-gray-400">No one-pager</span>
        )}
      </div>
    </div>
  );
}
