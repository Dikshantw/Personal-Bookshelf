import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
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
    <>
      <div className="flex justify-between items-center sticky top-0 mb-4 bg-slate-500 p-3">
        <h3 className="text-white font-bold">My Bookshelf</h3>
        <Link to="/" className="text-white font-bold">
          Search more books
        </Link>
      </div>
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
    </>
  );
};

export default BookShelf;
