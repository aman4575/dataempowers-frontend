// src/components/Card.js
export default function Card({ title, content, children }) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-brand-primary/30 transition">
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-brand-primary mb-2">
          {title}
        </h3>
      )}

      {content && (
        <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
          {content}
        </p>
      )}

      {children}
    </div>
  );
}
