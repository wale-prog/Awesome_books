const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const awesomeBooks = document.getElementById('awesome-books');

let books = JSON.parse(localStorage.getItem('books')) || [];

const AddBooks = (title, author) => {
  books.push({
    title,
    author,
  });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author };
};

const createUI = ({ title, author }) => {
  const bookContainer = document.createElement('div');
  bookContainer.setAttribute('class', 'collection')
  const newBookDiv = document.querySelector('.new-books');
  bookContainer.innerHTML = `<p>${title} by ${author}</p>
  <p class="hidden">${author}</p>
    <button id="remove-btn" type="submit">Remove</button>`;
  newBookDiv.append(bookContainer);
};

books.forEach((element) => {
  createUI(element);
});

awesomeBooks.onsubmit = (event) => {
  event.preventDefault();
  const newBook = AddBooks(title.value, author.value);
  createUI(newBook);
  title.value = '';
  author.value = '';
};
const removeBook = function(){
    document.body.addEventListener('click', (event) => {
        if (event.target.id.includes('remove-btn')) {
          const parentDiv = event.target.parentNode;
          const removebookAuthor = event.target.previousElementSibling.textContent;
          books = books.filter((book) => (removebookAuthor !== book.author));
          localStorage.setItem('books', JSON.stringify(books));
          const newBookDiv = document.querySelector('.new-books');
          newBookDiv.removeChild(parentDiv);
        }
    });
}
removeBook();

