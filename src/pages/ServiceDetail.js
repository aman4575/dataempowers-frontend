// src/pages/ServiceDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/${slug}/`)
      .then((res) => setService(res.data))
      .catch((err) => console.error("Failed to fetch service", err));
  }, [slug]);

  useEffect(() => {
    if (service?.title) {
      document.title = `${service.title} | Service | Data & AI Empowers`;
    }
  }, [service]);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/${slug}/`)
      .then((res) => setService(res.data))
      .catch((err) => console.error("Failed to fetch service", err));
  }, [slug]);

  if (!service) {
    return (
      <main className="mt-20">
        <section className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-500">
          Loading service…
        </section>
      </main>
    );
  }

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-4xl mx-auto px-6 py-10">
        {/* Breadcrumbs */}
        <Breadcrumbs
          paths={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: service.title },
          ]}
        />

        {/* Title + Intro */}
        <header className="mt-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3">
            {service.title}
          </h1>
          {service.summary && (
            <p className="text-gray-700 text-sm md:text-base max-w-2xl">
              {service.summary}
            </p>
          )}
          <div className="mt-4 h-px w-full bg-gray-200" />
        </header>

        {/* Description / Body */}
        <article className="mt-6 text-gray-800 leading-relaxed whitespace-pre-line mb-8">
          {service.description}
        </article>

        {/* Optional PDF download */}
        {service.pdf && (
          <a
            href={service.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full shadow hover:bg-brand-dark transition"
          >
            📄 Download Service Brief
          </a>
        )}
      </section>
    </main>
  );
}
