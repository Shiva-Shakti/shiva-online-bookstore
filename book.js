// Mocking book data for API response
export default function handler(req, res) {
    const books = [
      { id: 1, title: "Book 1", author: "Author 1" },
      { id: 2, title: "Book 2", author: "Author 2" },
      { id: 3, title: "Book 3", author: "Author 3" },
    ];
  
    // Return the books in response
    res.status(200).json(books);
  }
  