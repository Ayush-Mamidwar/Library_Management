class Book {
  constructor(isbn, title, author, year) {
    if (!isbn || !title || !author || !year) {
      throw new Error('Invalid book details');
    }
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isBorrowed = false;  // New property to track if the book is borrowed
  }
}

module.exports = Book;
