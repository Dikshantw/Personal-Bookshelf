import React, { useEffect, useState } from "react";

interface BookCardProp {
  id: string;
  title: string;
  src: string;
  author: string[];
  showButtons?: boolean;
}

const BookCard: React.FC<BookCardProp> = ({
  id,
  title,
  src,
  author,
  showButtons = true,
}) => {
  const [isBookInShelf, setIsBookInShelf] = useState<boolean>(false);
  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    const bookInShelf = bookshelf.some((book: BookCardProp) => book.id === id);
    setIsBookInShelf(bookInShelf);
  }, [id]);
  function removeFromShelf() {
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    bookshelf = bookshelf.filter((book: BookCardProp) => book.id !== id);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
    setIsBookInShelf(false);
  }
  function addToBookshelf() {
    const newBook = { id, title, src, author };
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    const isBookInShelf = bookshelf.some(
      (book: BookCardProp) => book.id === newBook.id
    );

    if (!isBookInShelf) {
      bookshelf.push(newBook);
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
      setIsBookInShelf(true);
    }
  }
  return (
    <div className="w-[300px] p-4 border rounded-md shadow-md">
      <img src={src} alt={title} className="w-[300px] h-[400px] mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {author.join(", ") || "Not Available"}
        </p>
        {showButtons &&
          (isBookInShelf ? (
            <button
              className="ml-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={removeFromShelf}
            >
              Remove
            </button>
          ) : (
            <button
              className="ml-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={addToBookshelf}
            >
              Add
            </button>
          ))}
      </div>
    </div>
  );
};

export default BookCard;
