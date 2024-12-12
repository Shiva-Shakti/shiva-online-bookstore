import { useState } from "react";
import Link from "next/link";

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", quantity: 10 },
  { id: 2, title: "1984", author: "George Orwell", quantity: 5 },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", quantity: 8 },
  // Add the other books...
];

export default function BookList() {
  const [books, setBooks] = useState(initialBooks);

  const addBook = () => {
    const newBook = { id: Date.now(), title: "New Book", author: "Unknown", quantity: 1 };
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const adjustQuantity = (id, change) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, quantity: book.quantity + change } : book
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-red-500">Book List</h1>
      <button onClick={addBook} className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
        Add Book
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="p-4 border rounded shadow-md my-2 hover:bg-gray-200">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-700">{book.author}</p>
            <p>Quantity: {book.quantity}</p>
            <button
              onClick={() => adjustQuantity(book.id, 1)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Increase Quantity
            </button>
            <button
              onClick={() => adjustQuantity(book.id, -1)}
              className="ml-2 mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Decrease Quantity
            </button>
            <button
              onClick={() => removeBook(book.id)}
              className="ml-2 mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              Remove Book
            </button>
            <Link href={`/book/${book.id}`}>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
