import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyFurniture } from '../api/data.js';

const myFurnitureTemplate = (data) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
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

export async function myFurniturePage(context) {
    const data = await getMyFurniture();
    context.render(myFurnitureTemplate(data));
}