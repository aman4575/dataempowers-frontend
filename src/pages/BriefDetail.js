// src/pages/BriefDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";

export default function BriefDetail() {
  const { id } = useParams();
  const [brief, setBrief] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/policybriefs/${id}/`)
      .then((res) => setBrief(res.data))
      .catch((err) => console.error("Failed to fetch policy brief", err));
  }, [id]);

  useEffect(() => {
    if (brief?.title) {
      document.title = `${brief.title} | Policy Brief | Data & AI Empowers`;
    }
  }, [brief]);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/policybriefs/${id}/`)
      .then((res) => setBrief(res.data))
      .catch((err) => console.error("Failed to fetch policy brief", err));
  }, [id]);

  if (!brief) {
    return (
      <main className="mt-20">
        <section className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-600">
          Loading brief...
        </section>
      </main>
    );
  }

  const formattedDate = brief.created_at
    ? new Date(brief.created_at).toLocaleDateString()
    : "";

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-4xl mx-auto px-6 py-10">
        {/* Breadcrumbs */}
        <Breadcrumbs
          paths={[
            { label: "Home", to: "/" },
            { label: "Policy Briefs", to: "/portfolio" },
            { label: brief.title },
          ]}
        />

        {/* Title + Metadata */}
        <header className="mt-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3">
            {brief.title}
          </h1>
          {formattedDate && (
            <p className="text-gray-500 text-sm">
              Published{" "}
              <span className="font-medium text-gray-700">{formattedDate}</span>
            </p>
          )}
          <div className="mt-4 h-px w-full bg-gray-200" />
        </header>

        {/* Summary / Body */}
        <article className="mt-6 text-gray-800 leading-relaxed whitespace-pre-line mb-8">
          {brief.summary}
        </article>

        {/* PDF Download Button */}
        {brief.pdf && (
          <a
            href={brief.pdf}
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
