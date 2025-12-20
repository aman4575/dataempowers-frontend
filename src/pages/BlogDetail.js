// src/pages/BlogDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blogposts/${slug}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Failed to fetch blog post", err));
  }, [slug]);

  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | Blog | Data & AI Empowers`;
    }
  }, [post]);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blogposts/${slug}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Failed to fetch blog post", err));
  }, [slug]);

  if (!post) {
    return (
      <main className="mt-20">
        <section className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-600">
          Loading blog post...
        </section>
      </main>
    );
  }

  const formattedDate = post.created_at
    ? new Date(post.created_at).toLocaleDateString()
    : "";

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-4xl mx-auto px-6 py-10">
        {/* Breadcrumbs */}
        <Breadcrumbs
          paths={[
            { label: "Home", to: "/" },
            { label: "Blog", to: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Title + Meta */}
        <header className="mt-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {post.author && (
              <>
                By <span className="font-medium text-gray-700">{post.author}</span>
              </>
            )}
            {post.author && formattedDate && " • "}
            {formattedDate && (
              <span className="text-gray-500">{formattedDate}</span>
            )}
          </p>
          <div className="mt-4 h-px w-full bg-gray-200" />
        </header>

        {/* Content */}
        <article className="mt-6 text-gray-800 leading-relaxed whitespace-pre-line">
          {post.content}
        </article>
      </section>
    </main>
  );
}
