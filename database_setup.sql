CREATE DATABASE online_bookstore;
USE online_bookstore;
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  quantity INT
);
