export class Book {
    title;
    genre;
    author;
    read;   //true or false
    readDate;

    constructor(title, genre, author, read = false, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }

}