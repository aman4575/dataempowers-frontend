// src/components/ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";
import { toUrl } from "../utils/helpers";

export default function ServiceCard({ service }) {
  const onepagerUrl = service.onepager ? toUrl(service.onepager) : null;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-brand-primary/30 transition">
      <h3 className="text-lg md:text-xl font-semibold text-brand-primary mb-2">
        <Link to={`/services/${service.slug}`} className="hover:underline">
          {service.title}
        </Link>
      </h3>

      <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
        {service.summary?.length > 140
          ? service.summary.slice(0, 140) + "…"
          : service.summary}
      </p>

      <div className="flex items-center justify-between gap-3">
        <Link
          to={`/services/${service.slug}`}
          className="text-sm font-medium text-brand-primary hover:text-brand-dark hover:underline"
        >
          Learn more →
        </Link>

        {onepagerUrl ? (
          <a
            href={onepagerUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs md:text-sm font-medium text-brand-primary hover:text-brand-dark hover:underline"
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
