import { html } from '../../node_modules/lit-html/lit-html.js';
import { getElementById, deleteFurniture } from '../api/data.js';

const detailsTemplate = (element, onDelete) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${element.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${element.make}</span></p>
                <p>Model: <span>${element.model}</span></p>
                <p>Year: <span>${element.year}</span></p>
                <p>Description: <span>${element.description}</span></p>
                <p>Price: <span>${element.price}</span></p>
                <p>Material: <span>${element.material}</span></p>
                <div style= ${element._ownerId == sessionStorage.getItem('userId') ? '' : 'display: none'}>
                    <a href= ${`/edit/${element._id}`} class="btn btn-info">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
                </div>
            </div>
        </div>`;

export async function detailsPage(context) {
    const id = context.params.id;
    const element = await getElementById(id);
    context.render(detailsTemplate(element, onDelete));

    async function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this furniture ?');
        if (confirmation) {
            await deleteFurniture(id);
            context.page.redirect('/');
        }
    }
}
