import { cats } from './catSeeder.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

const cardTemplate = (cats) => html`
<ul @click=${toggle}>
    ${cats.map(c => catTemplate(c))}
</ul>`;

const catTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${cat.displayed ? 'Hide' : 'Show' } status code</button>
        <div class="status" style=${styleMap(cat.displayed ? {} : {display: 'none'})} id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;

cats.forEach(c => c.displayed = false);
const section = document.getElementById('allCats');
update();

function update() {
    const result = cardTemplate(cats);
    render(result, section);
}

function toggle(event) {
    event.preventDefault();
    const id = event.target.parentNode.querySelector('.status').id;
    const cat = cats.find(c => c.id == id);
    cat.displayed = !cat.displayed;
    update();
}