// pages/book/[id].tsx
import { useRouter } from "next/router";

// Array of books (use your full list of books)
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", quantity: 5 },
  { id: 2, title: "1984", author: "George Orwell", quantity: 8 },
  { id: 3, title: "Moby Dick", author: "Herman Melville", quantity: 6 },
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

export default function BookDetails() {
  const { query } = useRouter();
  const bookId = parseInt(query.id as string); // Extract the book ID from the URL

  // Find the book details based on the ID
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">{book.title}</h1>
      <h2 className="text-xl text-gray-700">By: {book.author}</h2>
      <p className="mt-2">Quantity Available: {book.quantity}</p>
      {/* Add more details about the book here */}
    </div>
  );
}
