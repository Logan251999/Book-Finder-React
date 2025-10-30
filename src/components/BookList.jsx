import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (books.length === 0)
    return (
      <p className="mt-8 text-gray-500">No books found. Try another title.</p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
