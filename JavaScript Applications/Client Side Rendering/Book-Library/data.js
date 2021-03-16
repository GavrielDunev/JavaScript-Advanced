const path = 'http://localhost:3030/jsonstore/collections/books';

async function request(path, options) {
    const response = await fetch(path, options);
    const data = await response.json();
    return data;
}

async function getAllBooks() {
    return Object.entries(await request(path))
    .map(([k, v]) => Object.assign(v, {_id: k}));
}

async function createBook(book) {
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    };
    return await request(path, options);
}

async function getBookById(id) {
    return await request(path + '/' + id);
}

async function updateBook(id, book) {
    const options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    };
    return await request(path + '/' + id, options);
}

async function deleteBook(id) {
    const options = {
        method: 'delete',
    };
    return await request(path + '/' + id, options);
}

export {
    getAllBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook
};