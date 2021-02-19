import {BookList} from "./booklist.js";
import {Book} from "./book.js";

let bookList = new BookList();

let book1 = new Book("Az öreg halász", "dráma", "Ernest Hemingway");
let book2 = new Book("A boldog hülye és az okos depressziós", "dráma", "Kepes András");
let book3 = new Book("Zöldlámpa", "életrajz", "Matthew McConaughey");
let book4 = new Book("Örökült sors", "pszichológia", "Orvos-Tóth Noémi");
let book5 = new Book("Élet a bolygónkon", "tudomány", "David Attenborough");

bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);

console.log(bookList.allTheBooks);
console.log(bookList.currentBook);
console.log(bookList.nextBook);
bookList.finishCurrentBook();
console.log(bookList.currentBook);
bookList.finishCurrentBook();
// console.log(bookList.getNotReadYet());
// console.log(bookList.getRead());

// console.log(bookList.lastBook);
// console.log(bookList.allTheBooks);












