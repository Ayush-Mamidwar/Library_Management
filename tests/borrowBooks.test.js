const Library = require('../src/library'); // Import the Library class
const Book = require('../src/book'); // Import the Book class

let library;

// Initialize a new Library instance before each test
beforeEach(() => {
  library = new Library();
});

// Test case to borrow a book from the library if it's available
test('should borrow a book from the library if available', () => {
  const book = new Book('12345', 'Test Book', 'John Doe', 2021);
  library.addBook(book);
  library.borrowBook('12345');

  // After borrowing, the book should not be available
  expect(library.getAvailableBooks()).not.toContainEqual(book); 
});

// Test case for borrowing a book that is already borrowed
test('should throw an error if the book is already borrowed', () => {
  const book = new Book('12345', 'Test Book', 'John Doe', 2021); 
  library.addBook(book); 
  library.borrowBook('12345');
  
  // Trying to borrow again should throw an error
  expect(() => library.borrowBook('12345')).toThrow('Book is already borrowed'); // Check for error
});

// Test case for trying to borrow a book that does not exist
test('should throw an error if trying to borrow a book that does not exist', () => {
  // Attempting to borrow a book with an invalid ISBN should throw an error
  expect(() => library.borrowBook('99999')).toThrow('Book not found');
});
