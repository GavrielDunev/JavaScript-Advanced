import { html } from '../node_modules/lit-html/lit-html.js';

const rowTemplate = (book) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${book._id}>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>`;

const tableTemplate = context => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody @click=${e => onButtonClick(e, context)}>
        ${context.data.map(rowTemplate)}
    </tbody>
</table>`;

const addFormTemplate = () => html`
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

const editFormTemplate = (book) => html`
<form id="edit-form">
    <input type="hidden" name="_id" .value=${book._id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save">
</form>`;

export const bodyTemplate = (context, bookToEdit) => html`
<button @click=${context.load} id="loadBooks">LOAD ALL BOOKS</button>
${tableTemplate(context)}
${bookToEdit ? editFormTemplate(bookToEdit) : addFormTemplate()}
`;

function onButtonClick(event, context) {
    const id = event.target.parentNode.dataset.id;

    if (event.target.textContent == 'Edit') {
        context.onEdit(id);
    } else if (event.target.textContent == 'Delete') {
        context.onDelete(id);
    }
}