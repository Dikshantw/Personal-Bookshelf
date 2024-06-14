import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

interface Book {
  id: string;
  title: string;
  src: string;
  author: string[];
}

const BookShelf: React.FC = () => {
  const [bookInShelf, setBookInShelf] = useState<Book[]>([]);

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    setBookInShelf(bookshelf);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookshelf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookInShelf.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            src={book.src}
            author={book.author}
            showButtons={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
