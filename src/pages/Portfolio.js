// src/pages/Portfolio.js
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [briefs, setBriefs] = useState([]);

  useEffect(() => {
    document.title = "Policy Briefs & Portfolio | Data & AI Empowers";
  }, []);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/policybriefs/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setBriefs(data);
      })
      .catch((err) => console.error("Failed to fetch briefs", err));
  }, []);

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Page header */}
        <header className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase">
            Portfolio
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary">
            Policy Briefs &amp; Portfolio
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of policy briefs, advisory work, and research outputs on
            AI governance, data equity, and digital public infrastructure.
          </p>
        </header>

        {briefs.length === 0 ? (
          <p className="text-center text-gray-600">
            No policy briefs available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {briefs.map((brief) => {
              const baseText = brief.summary || "";
              const excerpt =
                baseText && baseText.length > 200
                  ? baseText.slice(0, 200) + "…"
                  : baseText;

              return (
                <Card key={brief.id} title={brief.title} content={excerpt}>
                  <Link
                    to={`/briefs/${brief.id}`}
                    className="text-brand-primary hover:underline block mb-2 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                  {brief.pdf && (
                    <a
                      href={brief.pdf}
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
