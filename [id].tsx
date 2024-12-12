import { useRouter } from "next/router";

const BookDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simulating book data based on the ID
  const book = { id, title: `Book ${id}`, author: `Author ${id}` };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="mt-4">More details about the book will go here.</p>
      <button
        onClick={() => router.push("/book-list")}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Back to Book List
      </button>
    </div>
  );
};

export default BookDetails;
