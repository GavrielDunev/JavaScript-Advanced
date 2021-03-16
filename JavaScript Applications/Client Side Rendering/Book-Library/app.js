import * as api from './data.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { bodyTemplate } from './main.js';

const onSubmit = {
    'add-form': onCreate,
    'edit-form': onEdit
};

const context = {
    data: [],
    async load() {
        context.data = await api.getAllBooks();
        update();
    },
    onEdit(id) {
        const book = context.data.find(b => b._id == id);
        update(book);
    },
    async onDelete(id) {
        const confirmed = confirm('Are you sure you want to delete this book ?');
        if (confirmed) {
            await api.deleteBook(id);
        }
    }
};

document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit[event.target.id](formData);
});

initialize();

async function initialize() {
    update();
}

function update(book) {
    const result = bodyTemplate(context, book);
    render(result, document.body);
}

async function onCreate(formData) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };
    await api.createBook(book);
}

async function onEdit(formData) {
    const id = formData.get('_id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };
    await api.updateBook(id, book);
}