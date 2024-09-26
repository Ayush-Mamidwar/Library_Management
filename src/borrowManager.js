class BorrowManager {
    constructor(library) {
      this.library = library;
    }
  
    borrowBook(isbn) {
      const book = this.library.getBooks().find(b => b.isbn === isbn);
      if (!book) {
        throw new Error('Book not found');
      }
      if (book.isBorrowed) {
        throw new Error('Book is already borrowed');
      }
      book.isBorrowed = true;
    }
  
    getAvailableBooks() {
      return this.library.getBooks().filter(book => !book.isBorrowed);
    }
  }
  
  module.exports = BorrowManager;
  