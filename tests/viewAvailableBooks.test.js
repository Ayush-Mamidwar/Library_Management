const Library = require('../src/library'); // Import the Library class
const Book = require('../src/book'); // Import the Book class

let library;

// Initialize a new Library instance before each test
beforeEach(() => {
  library = new Library();
});

// Test case to view all available books in the library
test('should view all available books in the library', () => {
  const book1 = new Book('12345', 'Test Book 1', 'John Doe', 2021); 
  const book2 = new Book('67890', 'Test Book 2', 'Jane Doe', 2022); 
  const book3 = new Book('11121', 'Test Book 3', 'Mark Smith', 2023); 
  
  library.addBook(book1); 
  library.addBook(book2); 
  library.borrowBook('12345'); 
  
  const availableBooks = library.getAvailableBooks(); 
  expect(availableBooks).toContainEqual(book2); 
  expect(availableBooks).toContainEqual(book3); 
  expect(availableBooks).not.toContainEqual(book1); 
});

// Test case to check the scenario when no books are available
test('should return an empty list if no books are available', () => {
  const book = new Book('12345', 'Test Book', 'John Doe', 2021); 
  library.addBook(book);
  library.borrowBook('12345');
  
  const availableBooks = library.getAvailableBooks();
  expect(availableBooks).toHaveLength(0);
});
