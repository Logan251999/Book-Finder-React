import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md shadow-md rounded-lg overflow-hidden bg-white/70 backdrop-blur-md"
    >
      <input
        type="text"
        placeholder="Search books by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-3 outline-none text-gray-700 bg-transparent"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 font-semibold hover:opacity-90 transition"
      >
        Search
      </button>
    </form>
  );
}
