import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
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
          <div key={book.title}>
            <h2>{book.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
