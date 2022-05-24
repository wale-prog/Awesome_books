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

  removeBooks(indexNum) {
    this.indexNum = indexNum;
    this.books = this.books.filter((item) => this.books.indexOf(item) !== indexNum);
  }
}