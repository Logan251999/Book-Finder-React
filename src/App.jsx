import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (title) => {
    if (!title.trim()) return;

    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
      );
      const data = await response.json();
      setBooks(data.docs || []);
    } catch {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-purple-100 text-gray-800 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Book Finder
      </h1>
      <SearchBar onSearch={searchBooks} />
      {loading && (
        <div className="mt-8 flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 mt-2">Finding books for you...</p>
        </div>
      )}{" "}
      {error && <p className="mt-8 text-red-500">{error}</p>}
      {!loading && !error && <BookList books={books} />}
    </div>
  );
}
