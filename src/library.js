const BorrowManager = require('./borrowManager');
class Library {
  constructor() {
    this.books = [];
    this.borrowManager = new BorrowManager(this);
  }

  addBook(book) {
    if (this.books.find(b => b.isbn === book.isbn)) {
      throw new Error('Book with this ISBN already exists');
    }
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  borrowBook(isbn) {
    this.borrowManager.borrowBook(isbn);
  }

  getAvailableBooks() {
    return this.borrowManager.getAvailableBooks();
  }
}

module.exports = Library;
