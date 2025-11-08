import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blogposts/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setPosts(data);
      })
      .catch((err) => console.error("Failed to fetch blog posts", err));
  }, []);

  return (
    <div className="mt-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Blog & Insights
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No blog posts available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content.substring(0, 150) + "..."}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
