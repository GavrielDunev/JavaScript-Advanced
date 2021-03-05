async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = response.json();
    return data;
}

async function loadBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(createRow).join('');
    document.querySelector('tbody').innerHTML = rows;

    function createRow([id, book]) {
        const result = `
        <tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>`
        return result;
    }
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    event.target.reset();
    loadBooks();
}

async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
    event.target.reset();
    loadBooks();
}

async function deleteBook(id) {
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    });
    loadBooks();
}

function start() {
    document.getElementById('loadBooks').addEventListener('click', loadBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.getElementById('editForm').addEventListener('submit', updateBook);
    document.querySelector('table').addEventListener('click', actionHandler);

    loadBooks();
}

function actionHandler(event) {
    if (event.target.textContent == 'Edit') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';
        const bookId = event.target.parentNode.parentNode.dataset.id;
        loadBookToEdit(bookId);
    } else if (event.target.textContent == 'Delete') {
        const confirmed = confirm('Are you sure you want to delete this book ?');
        if (confirmed){
            const bookId = event.target.parentNode.parentNode.dataset.id;
            deleteBook(bookId);
        }
    }

    async function loadBookToEdit(id) {
        const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);

        document.querySelector('#editForm [name="id"]').value = id;
        document.querySelector('#editForm [name="title"]').value = book.title;
        document.querySelector('#editForm [name="author"]').value = book.author;
    }
}

start();