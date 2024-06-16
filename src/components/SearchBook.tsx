import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { GiBookshelf } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
interface Book {
  key: string;
  title: string;
  cover_i: number;
  author_name: string[];
}
const SearchBook = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Book[]>([]);
  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }
    const books = async () => {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const data = await response.json();
      setResults(data.docs);
    };
    books();
  }, [query]);

  return (
    <>
      <div className="flex justify-between items-center sticky top-0 mb-6 bg-slate-500 p-4">
        <Link to="/" className="text-white font-bold">
          <span className="hidden sm:inline">Home</span>
          <FaHome className="inline sm:hidden" />
        </Link>
        <input
          className="border border-black p-1 rounded-2xl"
          type="text"
          placeholder="Search by Book Name...."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link to="/mybookshelf" className="text-white font-bold">
          <span className="hidden sm:inline">My Bookshelf</span>
          <GiBookshelf className="inline sm:hidden" />
        </Link>
      </div>
      {query?.length < 2 ? (
        <h2 className="flex justify-center">
          Please enter at least 3 characters to search...
        </h2>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center ">
          {results.map((book) => (
            <BookCard
              key={book.key}
              id={book.key}
              title={book.title}
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              author={book.author_name}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBook;
