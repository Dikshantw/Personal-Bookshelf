import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";

interface Book {
  key: string;
  title: string;
  cover_i: number;
  author_name: string[];
}

function App() {
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
      <div className="flex justify-between sticky top-0 mb-6 bg-slate-500 p-4">
        <h3>Personal Bookshelf</h3>
        <input
          className="border border-black"
          type="text"
          placeholder="Search Books here...."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <h3>My BookShelf</h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-center ">
        {results.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            author={book.author_name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
