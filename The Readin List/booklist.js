export class BookList {
    read;
    notReadYet;
    lastBook;
    currentBook;
    nextBook;
    allTheBooks = [];

    add(book) {
        this.allTheBooks.push(book);
        if (this.currentBook === undefined) {
            this.currentBook = book;
        } else if (this.nextBook === undefined) {
            this.nextBook = book;
        }
    }

    finishCurrentBook() {
        this.currentBook.read = true;  //should mark the book that is currently being read as "read"
        this.currentBook.readDate = Date.now();  // Give it a read date of new Date(Date.now())
        this.lastBook = this.currentBook; // Change the last book read to be the book that just got finished
        this.currentBook = this.nextBook; // Change the current book to be the next book to be read
        for (let book = 0; book < this.allTheBooks.length; book++) {
            if (!this.allTheBooks[book].read && this.currentBook !== this.allTheBooks[book]) {
                this.nextBook = this.allTheBooks[book]; // Change the next book to be read property to be the first unread book you find in the list of books
                break;
            }
        }
    }

    getRead() {
        this.read = 0;
        this.allTheBooks.forEach((book) => {
            if (book.read) {
                this.read++;
            }
        })
        return this.read;
    }


    getNotReadYet() {
        this.notReadYet = 0;
        this.allTheBooks.forEach((book) => {
            if (!book.read) {
                this.notReadYet++;
            }
        })
        return this.notReadYet;
    }
}