// src/pages/Blog.js
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = "Blog & Insights | Data & AI Empowers";
  }, []);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blogposts/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setPosts(data);
      })
      .catch((err) => console.error("Failed to fetch blog posts", err));
  }, []);


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
    <main className="mt-20 bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase">
            Insights &amp; Analysis
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary">
            Blog &amp; Insights
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reflections, explainers, and practitioner notes on responsible AI,
            data governance, NLP, and digital public infrastructure.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">
            No blog posts available yet. New insights will be published here
            soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const baseText =
                post.summary ||
                (post.content ? String(post.content) : "");

              const excerpt =
                baseText && baseText.length > 180
                  ? baseText.slice(0, 180) + "…"
                  : baseText;

              return (
                <Card key={post.id} title={post.title} content={excerpt}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-brand-primary hover:underline text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
