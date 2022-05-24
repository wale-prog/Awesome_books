export default class Books {
  constructor(books) {
    this.books = books || [];
  }

  addBooks(title, author) {
    this.books.push({
      title,
      author,
    });
  }

  removeBooks(author) {
    this.author = author;
    this.books = this.books.filter((book) => book.author !== author);
  }
}