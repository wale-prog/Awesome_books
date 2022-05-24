export default class Books {
    constructor(book) {
        this.books = books;
    }

    addBooks(title, author){
        this.books.push({
            title,
            author,
        });
    }
}

