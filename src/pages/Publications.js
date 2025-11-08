import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Publications() {
  const [publications, setPublications] = useState([]);

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
    <div className="mt-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Publications
      </h1>
      <h2 className="text-2xl font-semibold text-brandBlue mb-6">Research & Publications</h2>
        <p className="text-brandGray mb-12 max-w-3xl leading-relaxed">
          This space includes strategic research outputs, policy papers, and AI governance briefs contributing
          to national digital public infrastructure debates and applied Responsible AI implementation.
        </p>


      {publications.length === 0 ? (
        <p className="text-center text-gray-600">No publications available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Card key={pub.id} title={pub.title} content={pub.summary}>
              <Link
                to={`/publications/${pub.id}`}
                className="text-blue-600 hover:underline block mb-2"
              >
                Read More →
              </Link>
              {pub.pdf && (
                <a
                  href={pub.pdf}
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
    </div>
  );
}
