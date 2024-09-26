const Library = require('../src/library');
const Book = require('../src/book');

let library;

beforeEach(() => {
  library = new Library();
});

test('should return a borrowed book to the library', () => {
  const book = new Book('12345', 'Test Book', 'John Doe', 2021);
  library.addBook(book);
  library.borrowBook('12345');
  library.returnBook('12345');
  
  // After returning, the book should be available again
  expect(library.getAvailableBooks()).toContainEqual(book);
});

test('should throw an error if trying to return a book that is not borrowed', () => {
  const book = new Book('12345', 'Test Book', 'John Doe', 2021);
  library.addBook(book);
  
  // Returning a book that was never borrowed
  expect(() => library.returnBook('12345')).toThrow('Book was not borrowed');
});

test('should throw an error if trying to return a book that does not exist', () => {
  // Returning a book that doesn't exist
  expect(() => library.returnBook('99999')).toThrow('Book not found');
});
