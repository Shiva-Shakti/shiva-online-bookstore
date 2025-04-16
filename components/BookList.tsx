import { useEffect, useState } from "react";

interface Book {
  _id: string;
  title: string;
  author: string;
  quantity: number;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // New state for the form inputs
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    quantity: 1
  });

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data: Book[] = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (error: any) {
      console.error("❌ Error:", error);
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    const newBookToAdd = {
      title: newBook.title,
      author: newBook.author,
      quantity: Number(newBook.quantity),

    };

    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBookToAdd),
      });

      if (!response.ok) throw new Error("Failed to add book");

      // Refresh the book list from MongoDB after adding the new book
      await fetchBooks();
      setNewBook({ title: '', author: '', quantity: 1 }); // Reset the form
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  if (loading) {
    return <div className="text-center">Loading books...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Book List</h2>

      {/* Book Add Form */}
      <div className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newBook.quantity}
          onChange={handleInputChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          onClick={handleAddBook}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>

      {/* Book List */}
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book._id} className="border-b pb-2">
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm">Quantity: {book.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
