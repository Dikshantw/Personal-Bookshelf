import React from "react";

interface BookCardProp {
  title: string;
  src: string;
  author: string[];
}

const BookCard: React.FC<BookCardProp> = ({ title, src, author }) => {
  return (
    <div className="w-[300px] p-4 border rounded-md shadow-md">
      <img src={src} alt={title} className="w-[300px] h-[400px] mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {author.join(", ") || "Not Available"}
        </p>
        <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default BookCard;
