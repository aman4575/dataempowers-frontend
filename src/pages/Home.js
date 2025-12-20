// src/pages/Home.js
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  const [briefs, setBriefs] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    document.title =
      "Data & AI Empowers – Responsible AI, Data Governance & NLP Advisory";
  }, []);
  
  // Fetch policy briefs (latest 3)
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/policybriefs/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setBriefs(data.slice(0, 3));
      })
      .catch((err) => console.error("Failed to fetch briefs", err));
  }, []);

  // Fetch services (show 3 featured)
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setServices(data.slice(0, 3));
      })
      .catch((err) => console.error("Failed to fetch services", err));
  }, []);

  return (
    <main className="mt-20">
      {/* Hero Section */}
      <section className="bg-brand-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-5 leading-tight">
            Empowering Governments, Businesses &amp; Education
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Through{" "}
            <span className="font-semibold">
              responsible Data &amp; AI strategies
            </span>
            , we support <strong>policy-makers</strong>,{" "}
            <strong>enterprises</strong>, and{" "}
            <strong>EdTech innovators</strong> in shaping the future with AI and
            NLP — grounded in equity, accountability, and national development.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-dark"
            >
              Schedule a Strategy Call
            </Link>
            <Link
              to="/portfolio"
              className="inline-block rounded-full border border-brand-accent px-6 py-3 text-sm font-medium text-brand-primary hover:bg-brand-primary/5"
            >
              Explore Policy Briefs
            </Link>

          </div>
        </div>
      </section>

      {/* About / Who We Are */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase">
            About DataEmpowers
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">
            Research-led advisory for responsible AI &amp; data
          </h2>
          <div className="mt-3 h-1 w-16 bg-brand-accent rounded-full mx-auto" />
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            DataEmpowers is a research-led advisory initiative helping
            governments, development organizations, and institutions adopt
            Responsible AI and Data solutions that reinforce equitable digital
            public infrastructure. Our focus is applied research, policy
            strategy, and NLP-driven decision analytics.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 text-center">
            <div className="h-1 w-16 bg-brand-accent rounded-full mx-auto mb-6" />
            Our Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Advisory, research, and implementation support across Responsible
            AI, data governance, and NLP solutions for policy, development, and
            education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.length > 0 ? (
              services.map((s) => (
                <div
                  key={s.id}
                  className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-brand-primary/30 transition"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-brand-primary mb-2">
                    <Link
                      to={`/services/${s.slug}`}
                      className="hover:underline"
                    >
                      {s.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                    {s.summary
                      ? s.summary.length > 140
                        ? s.summary.slice(0, 140) + "…"
                        : s.summary
                      : ""}
                  </p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-dark"
                  >
                    Learn more
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-1 md:col-span-3 text-center text-gray-500">
                No services available yet.
              </p>
            )}
          </div>

          {/* Services CTA */}
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full shadow hover:bg-brand-dark transition"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / Tagline Banner */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-dark text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Trusted by Governments, Businesses &amp; Educators
          </h2>
          <p className="mt-3 text-sm md:text-base text-blue-100 leading-relaxed">
            Delivering strategic Data &amp; AI solutions with impact,
            responsibility, and innovation — from national digital public
            infrastructure to classroom AI.
          </p>
        </div>
      </section>

      {/* Latest Policy Briefs */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 text-center">
          Latest Policy Briefs
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Applied, practitioner-focused briefs on AI, data governance, and
          digital public infrastructure.
        </p>

        {briefs.length === 0 ? (
          <p className="text-center text-gray-600">
            No policy briefs available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {briefs.map((brief) => (
              <Card
                key={brief.id}
                title={brief.title}
                content={
                  brief.summary && brief.summary.length > 150
                    ? brief.summary.slice(0, 150) + "…"
                    : brief.summary
                }
              >
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
            ))}
          </div>
        )}

        <div className="text-center mt-10">
        <Link
          to="/portfolio"
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full shadow hover:bg-brand-dark transition"
        >
          View all briefs
        </Link>

        </div>
      </section>
    </main>
  );
}
