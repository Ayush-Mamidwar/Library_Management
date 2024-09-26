const Book = require('./book');

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    // Check for duplicate ISBN
    if (this.books.find(b => b.isbn === book.isbn)) {
      throw new Error('Book with this ISBN already exists');
    }
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }
}

module.exports = Library;
