// pages/api/books.js
import mongoose from 'mongoose';
import Book from '../../models/Book';

const MONGODB_URI = 'mongodb://localhost:27017/bookstore'; // Change if using Atlas

async function connectDB() {
  if (mongoose.connections[0].readyState) return; // Avoid reconnecting
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const books = await Book.find();
    res.status(200).json(books);
  }

  else if (req.method === 'POST') {
    const { title, author } = req.body;

    try {
      const newBook = new Book({ title, author });
      await newBook.save();
      res.status(201).json({ message: 'Book added', book: newBook });
    } catch (err) {
      res.status(500).json({ message: 'Failed to add book', error: err });
    }
  }

  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
