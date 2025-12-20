// src/pages/PublicationDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PublicationDetail() {
  const { id } = useParams();
  const [publication, setPublication] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/publications/${id}/`)
      .then((res) => setPublication(res.data))
      .catch((err) => console.error("Failed to fetch publication", err));
  }, [id]);

  useEffect(() => {
    if (publication?.title) {
      document.title = `${publication.title} | Publication | Data & AI Empowers`;
    }
  }, [publication]);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/publications/${id}/`)
      .then((res) => setPublication(res.data))
      .catch((err) => console.error("Failed to fetch publication", err));
  }, [id]);

  if (!publication) {
    return (
      <main className="mt-20">
        <section className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-600">
          Loading publication...
        </section>
      </main>
    );
  }

  const createdDate = publication.created_at
    ? new Date(publication.created_at).toLocaleDateString()
    : "";
  const year = publication.year || "";

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-4xl mx-auto px-6 py-10">
        {/* Breadcrumbs */}
        <Breadcrumbs
          paths={[
            { label: "Home", to: "/" },
            { label: "Publications", to: "/publications" },
            { label: publication.title },
          ]}
        />

        {/* Title + Meta */}
        <header className="mt-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3">
            {publication.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {year && (
              <>
                {year}
                {createdDate && " • "}
              </>
            )}
            {createdDate && (
              <>
                Published{" "}
                <span className="font-medium text-gray-700">
                  {createdDate}
                </span>
              </>
            )}
          </p>
          <div className="mt-4 h-px w-full bg-gray-200" />
        </header>

        {/* Summary / Description */}
        <article className="mt-6 text-gray-800 leading-relaxed whitespace-pre-line mb-8">
          {publication.summary}
        </article>

        {/* PDF Download */}
        {publication.pdf && (
          <a
            href={publication.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full shadow hover:bg-brand-dark transition"
          >
            📄 Download PDF
          </a>
        )}
      </section>
    </main>
  );
}
