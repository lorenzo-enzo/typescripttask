/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

// 1. Definisi Tipe Data (Type Definition)
type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

// 2. Implementasi Data untuk 3 Buku
const book1: Book = {
  isbn: "978-602-03-",
  title: "Belajar TypeScript Dasar",
  author: "Ahmad Developer",
  totalPages: 250,
  category: "Teknologi",
  isAvailable: true,
};

const book2: Book = {
  isbn: "978-602-04-",
  title: "Pemrograman Web Modern",
  author: "Siti Programmer",
  totalPages: 320,
  category: "Teknologi",
  isAvailable: false,
};

const book3: Book = {
  isbn: "978-602-05-",
  title: "Algoritma dan Struktur Data",
  author: "Budi Komputer",
  totalPages: 400,
  category: "Pendidikan",
  isAvailable: true,
};


console.log(book1);
console.log(book2);
console.log(book3);