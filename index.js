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
  <p class="hidden">${title}</p>
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
    const btn = event.target;
    const removebtns = document.querySelectorAll('#remove-btn');
    const indexarr = [...removebtns].indexOf(btn);
    library.removeBooks(indexarr);
    newBookDiv.removeChild(parentDiv);
    localStorage.setItem('books', JSON.stringify(library.books));
  }
});

 const contactbtn = document.querySelector('.contact-btn');
 const topbooks = document.querySelector('#top-books');
 const contact = document.querySelector('.background');
 const bookcollection = document.querySelector('.collection'); 

 contactbtn.addEventListener('click', () => {
  contact.classList.remove('hidden');
  topbooks.classList.add('hideen');
   bookcollection.classList.add('hidden'); 
 });