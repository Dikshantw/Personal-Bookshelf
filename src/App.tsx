import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";

interface Book {
  key: string;
  title: string;
  cover_i: number;
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
      <input
        type="text"
        name=""
        id=""
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div>
        {results.map((book) => (
          <div key={book.key}>
            <BookCard
              title={book.title}
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
