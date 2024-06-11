import React from "react";

interface BookCardProp {
  title: string;
  src: string;
}

const BookCard: React.FC<BookCardProp> = ({ title, src }) => {
  return (
    <div>
      <img src={src} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default BookCard;
