import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [briefs, setBriefs] = useState([]);

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
    <div className="mt-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Policy Briefs & Portfolio
      </h1>

      {briefs.length === 0 ? (
        <p className="text-center text-gray-600">No policy briefs available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {briefs.map((brief) => (
            <Card key={brief.id} title={brief.title} content={brief.summary}>
              <Link
                to={`/briefs/${brief.id}`}
                className="text-blue-600 hover:underline block mb-2"
              >
                Read More →
              </Link>
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
    </div>
  );
}
