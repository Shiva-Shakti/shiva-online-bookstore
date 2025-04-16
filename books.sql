-- books.sql

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    quantity INT DEFAULT 0,
    copies_sold INT DEFAULT 0
);

-- Sample data
INSERT INTO books (id, title, author, quantity) VALUES
(1, 'To Kill a Mockingbird', 'Harper Lee', 5),
(2, '1984', 'George Orwell', 8),
(3, 'Moby Dick', 'Herman Melville', 6),
(4, 'The Great Gatsby', 'F. Scott Fitzgerald', 7),
(5, 'Pride and Prejudice', 'Jane Austen', 4),
(6, 'The Catcher in the Rye', 'J.D. Salinger', 9),
(7, 'Crime and Punishment', 'Fyodor Dostoevsky', 3),
(8, 'War and Peace', 'Leo Tolstoy', 10),
(9, 'The Odyssey', 'Homer', 2),
(10, 'The Hobbit', 'J.R.R. Tolkien', 5),
(11, 'Brave New World', 'Aldous Huxley', 7),
(12, 'The Picture of Dorian Gray', 'Oscar Wilde', 4),
(13, 'Dracula', 'Bram Stoker', 6),
(14, 'Frankenstein', 'Mary Shelley', 8),
(15, 'The Brothers Karamazov', 'Fyodor Dostoevsky', 3),
(16, 'The Scarlet Letter', 'Nathaniel Hawthorne', 5),
(17, 'The Alchemist', 'Paulo Coelho', 9),
(18, 'The Secret Garden', 'Frances Hodgson Burnett', 2),
(19, 'Jane Eyre', 'Charlotte Brontë', 6),
(20, 'Wuthering Heights', 'Emily Brontë', 8);
