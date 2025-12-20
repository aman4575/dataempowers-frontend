// src/pages/Publications.js
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    document.title = "Research & Publications | Data & AI Empowers";
  }, []);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/publications/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setPublications(data);
      })
      .catch((err) => console.error("Failed to fetch publications", err));
  }, []);

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Page header */}
        <header className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase">
            Publications
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary">
            Research &amp; Publications
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Strategic research outputs, policy papers, and AI governance briefs
            contributing to national digital public infrastructure debates and
            applied Responsible AI implementation.
          </p>
        </header>

        {publications.length === 0 ? (
          <p className="text-center text-gray-600">
            No publications available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => {
              const baseText = pub.summary || "";
              const excerpt =
                baseText && baseText.length > 200
                  ? baseText.slice(0, 200) + "…"
                  : baseText;

              return (
                <Card key={pub.id} title={pub.title} content={excerpt}>
                  <Link
                    to={`/publications/${pub.id}`}
                    className="text-brand-primary hover:underline block mb-2 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-primary hover:underline text-sm"
                    >
                      📄 Download PDF
                    </a>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
