import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFurniture } from '../api/data.js';

const dashboardTemplate = (data) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(elementTemplate)}
        </div>`;

const elementTemplate = element => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${element.img} />
            <p>${element.description}</p>
            <footer>
                <p>Price: <span>${element.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${element._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

export async function dashboardPage(context) {
    const data = await getAllFurniture();
    context.render(dashboardTemplate(data));
}