// components/BookList.tsx
const BookList = () => {
    const books = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-2xl mb-4">Book List</h2>
        <ul className="space-y-2">
          {books.map((book, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookList;
  