import React from "react";
import { User, Calendar } from "lucide-react";

export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  const author = book.author_name?.join(", ") || "Unknown Author";
  const year = book.first_publish_year || "N/A";

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition transform hover:scale-105">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h2 className="mt-3 font-semibold text-lg text-gray-800">{book.title}</h2>

      <div className="flex items-center text-sm text-gray-600 mt-2 space-x-2">
        <User size={16} className="text-gray-500" />
        <span>{author}</span>
      </div>

      <div className="flex items-center text-sm text-gray-600 mt-1">
        <Calendar size={14} className="mr-1 text-gray-500" />
        <span>{year}</span>
      </div>
    </div>
  );
}
