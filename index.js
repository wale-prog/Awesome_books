const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
let books = JSON.parse('books', localStorage.getItem(books)) || [];
const addbutton = document.querySelector('.add');

function AddBooks(title, author){
    books.push({
        title,
        author,
    })
    localStorage.setItem('books', JSON.stringify(books))
}

const createUI = ({title, author}) => {
    const newBookDiv = document.createElement('div');
    newBookDiv.setAttribute('class', 'new-books');
    const topBooks = document.querySelector('#top-books');
    topBooks.append(newBookDiv);
    newBookDiv.innerHTML = `<p>${title}</p>
    <p>${author}</p>
    <button type="submit">Remove</button>
    <hr class="line">`
}

addbutton.addEventListener('submit', AddBooks())
