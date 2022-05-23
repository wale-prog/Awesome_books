const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
let books = JSON.parse('books', localStorage.getItem(books)) || [];

function AddBooks(title, author){
    books.push({
        title,
        author,
    })
    localStorage.setItem('books', JSON.stringify(books))
}

const createUI = ()=>{
    const newBookDiv = document.createElement('div');
}


