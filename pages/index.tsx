import { useState } from "react";
import Link from "next/link";

// Array of books with title, author, and quantity
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", quantity: 5 },
  { id: 2, title: "1984", author: "George Orwell", quantity: 8 },
  { id: 3, title: "Moby Dick", author: "Herman Melville", quantity: 6 },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", quantity: 7 },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", quantity: 4 },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 9 },
  { id: 7, title: "Crime and Punishment", author: "Fyodor Dostoevsky", quantity: 3 },
  { id: 8, title: "War and Peace", author: "Leo Tolstoy", quantity: 10 },
  { id: 9, title: "The Odyssey", author: "Homer", quantity: 2 },
  { id: 10, title: "The Hobbit", author: "J.R.R. Tolkien", quantity: 5 },
  { id: 11, title: "Brave New World", author: "Aldous Huxley", quantity: 7 },
  { id: 12, title: "The Picture of Dorian Gray", author: "Oscar Wilde", quantity: 4 },
  { id: 13, title: "Dracula", author: "Bram Stoker", quantity: 6 },
  { id: 14, title: "Frankenstein", author: "Mary Shelley", quantity: 8 },
  { id: 15, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", quantity: 3 },
  { id: 16, title: "The Scarlet Letter", author: "Nathaniel Hawthorne", quantity: 5 },
  { id: 17, title: "The Alchemist", author: "Paulo Coelho", quantity: 9 },
  { id: 18, title: "The Secret Garden", author: "Frances Hodgson Burnett", quantity: 2 },
  { id: 19, title: "Jane Eyre", author: "Charlotte Brontë", quantity: 6 },
  { id: 20, title: "Wuthering Heights", author: "Emily Brontë", quantity: 8 },
];

export default function BookList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [updatedBooks, setUpdatedBooks] = useState(books); // State to manage updated book list
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newQuantity, setNewQuantity] = useState(0); // For the new book
  const itemsPerPage = 10;

  // Filter books based on search input
  const filteredBooks = updatedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Sort books by quantity (ascending)
  const sortedBooks = filteredBooks.sort((a, b) => a.quantity - b.quantity);

  // Pagination logic
  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);
  const displayedBooks = sortedBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Add a new book to the list
  const handleAddBook = (title: string, author: string, quantity: number) => {
    const newBook = {
      id: updatedBooks.length + 1,
      title,
      author,
      quantity,
    };
    setUpdatedBooks([...updatedBooks, newBook]);
  };

  // Remove a book from the list
  const handleRemoveBook = (id: number) => {
    const updatedList = updatedBooks.filter((book) => book.id !== id);
    setUpdatedBooks(updatedList);
  };

  // Adjust book quantity
  const handleAdjustQuantity = (id: number, newQuantity: number) => {
    const updatedList = updatedBooks.map((book) =>
      book.id === id ? { ...book, quantity: newQuantity } : book
    );
    setUpdatedBooks(updatedList);
  };

  // Handle submit for adding a new book
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddBook(newTitle, newAuthor, newQuantity);
    setNewTitle("");
    setNewAuthor("");
    setNewQuantity(0);
  };

  return (
    <div className="p-6">
      <h1 className="text-red-700 text-2xl font-semibold mb-4">Book List</h1>

      {/* Add Book Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
          className="mr-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          required
          className="mr-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(Number(e.target.value))}
          required
          className="mr-2 p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Add Book
        </button>
      </form>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // Reset to first page after searching
        }}
        className="mb-4 p-2 border rounded"
      />

      {/* Book List */}
      <ul>
        {displayedBooks.map((book) => (
          <li
            key={book.id}
            className="p-4 border rounded shadow-md my-2 hover:bg-gray-200"
          >
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-700">{book.author}</p>
            <p className="text-sm">Quantity: {book.quantity}</p>

            {/* Adjust quantity */}
            <div>
              <input
                type="number"
                value={book.quantity}
                onChange={(e) =>
                  handleAdjustQuantity(book.id, Number(e.target.value))
                }
                className="mr-2 p-1 border rounded"
              />
              <button
                onClick={() => handleRemoveBook(book.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Remove Book
              </button>
            </div>
            <Link href={`/book/${book.id}`}>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-500 text-white rounded hover:bg-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-500 text-white rounded hover:bg-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
