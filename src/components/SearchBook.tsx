import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
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
          Home
        </Link>
        <input
          className="border border-black p-1"
          type="text"
          placeholder="Search by Book Name...."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link to="/mybookshelf" className="text-white font-bold">
          My Bookshelf
        </Link>
      </div>
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
    </>
  );
};

export default SearchBook;
