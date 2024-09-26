const Library = require('../src/library'); // Import the Library class
const Book = require('../src/book'); // Import the Book class

let library;

// Initialize a new Library instance before each test
beforeEach(() => {
  library = new Library();
});

// Test case to add a valid book to the library
test('should add a valid book to the library', () => {
  const book = new Book('12345', 'Test Book', 'John Doe', 2021);
  library.addBook(book);
  expect(library.getBooks()).toContainEqual(book);
});

// Test case for adding a duplicate book based on ISBN
test('should throw an error if book with duplicate ISBN is added', () => {
  const book1 = new Book('12345', 'Test Book 1', 'John Doe', 2021);
  const book2 = new Book('12345', 'Test Book 2', 'Jane Doe', 2022);
  
  library.addBook(book1);
  expect(() => library.addBook(book2)).toThrow('Book with this ISBN already exists');
});

// Test case for adding an invalid book with missing fields
test('should throw an error when trying to add an invalid book (missing fields)', () => {
  expect(() => new Book(null, 'Test Book', 'John Doe', 2021)).toThrow('Invalid book details');
});
