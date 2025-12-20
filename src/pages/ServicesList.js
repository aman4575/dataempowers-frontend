// src/pages/ServicesList.js
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function ServicesList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    document.title = "Services | Data & AI Empowers";
  }, []);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setServices(data);
      })
      .catch((err) => console.error("Failed to fetch services", err));
  }, []);

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <header className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase">
            Services
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Strategic advisory, applied research, and implementation support for
            Responsible AI, data governance, NLP solutions, and digital public
            infrastructure.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.length > 0 ? (
            services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-brand-primary/30 transition"
              >
                <h2 className="text-lg md:text-xl font-semibold text-brand-primary mb-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:underline"
                  >
                    {service.title}
                  </Link>
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                  {service.summary?.length > 140
                    ? service.summary.slice(0, 140) + "…"
                    : service.summary}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-dark"
                >
                  Learn more
                  <span className="ml-1">→</span>
                </Link>
              </div>
            ))
          ) : (
            <p className="col-span-1 md:col-span-3 text-center text-gray-500">
              No services listed yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
