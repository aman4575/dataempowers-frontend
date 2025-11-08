import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  const [briefs, setBriefs] = useState([]);
  const [services, setServices] = useState([]);

  // Fetch policy briefs
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/policybriefs/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setBriefs(data.slice(0, 3));
      })
      .catch((err) => console.error("Failed to fetch briefs", err));
  }, []);

  // Fetch services
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setServices(data.slice(0, 3)); // only show 3 featured
      })
      .catch((err) => console.error("Failed to fetch services", err));
  }, []);

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-blue-50 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Empowering Governments, Businesses & Education
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Through <span className="font-semibold">responsible Data & AI strategies</span>, 
          we support <strong>policy-makers</strong>, <strong>enterprises</strong>, 
          and <strong>EdTech innovators</strong> in shaping the future with AI and NLP.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-brandGray text-lg leading-relaxed">
          DataEmpowers is a research-led advisory initiative helping governments, development organizations,
          and institutions adopt Responsible AI and Data solutions that reinforce equitable digital public
          infrastructure. Our focus is applied research, policy strategy, and NLP-driven decision analytics.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map((s) => (
              <div
                key={s.id}
                className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  <Link to={`/services/${s.slug}`} className="hover:underline">
                    {s.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-3">
                  {s.summary?.length > 120
                    ? s.summary.slice(0, 120) + "…"
                    : s.summary}
                </p>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Learn more →
                </Link>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No services available yet.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Trusted by Governments, Businesses & Educators Worldwide
        </h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
          Delivering strategic Data & AI solutions with impact, responsibility, and innovation.
        </p>
      </section>

      {/* Latest Policy Briefs */}
      <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
    Latest Policy Briefs
  </h2>

  {briefs.length === 0 ? (
    <p className="text-center text-gray-600">No policy briefs available yet.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {briefs.map((brief) => (
        <Card key={brief.id} title={brief.title} content={brief.summary}>
          <a
            href={`/briefs/${brief.id}`}
            className="text-blue-600 hover:underline block mb-2"
          >
            Read More →
          </a>
          {brief.pdf && (
            <a
              href={brief.pdf}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              📄 Download PDF
            </a>
          )}
        </Card>

      ))}
    </div>
  )}

  <div className="text-center mt-10">
    <a
      href="/portfolio"
      className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
    >
      View All Briefs →
    </a>
  </div>
</section>

    </div>
  );
}
