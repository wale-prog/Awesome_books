import Books from './Books.js';

const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const awesomeBooks = document.getElementById('awesome-books');
const newBookDiv = document.querySelector('.new-books');

const library = new Books(JSON.parse(localStorage.getItem('books'))) || [];

const createUI = ({ title, author }) => {
  const bookContainer = document.createElement('div');
  bookContainer.setAttribute('class', 'collection');
  bookContainer.innerHTML = `<p>${title} by ${author}</p>
  <p class="hidden">${author}</p>
    <button id="remove-btn" type="submit">Remove</button>`;
  newBookDiv.append(bookContainer);
};

library.books.forEach((element) => createUI(element));

awesomeBooks.onsubmit = (event) => {
  event.preventDefault();
  newBookDiv.innerHTML = '';
  library.addBooks(title.value, author.value);
  library.books.forEach((item) => createUI(item));
  localStorage.setItem('books', JSON.stringify(library.books));
  title.value = '';
  author.value = '';
};

document.body.addEventListener('click', (event) => {
  if (event.target.id.includes('remove-btn')) {
    const parentDiv = event.target.parentNode;
    const removebookAuthor = event.target.previousElementSibling.textContent;
    library.removeBooks(removebookAuthor);
    newBookDiv.removeChild(parentDiv);
    localStorage.setItem('books', JSON.stringify(library.books));
  }
});