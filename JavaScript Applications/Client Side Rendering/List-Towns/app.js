import { html, render } from '../node_modules/lit-html/lit-html.js';

const townTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;

document.getElementById('btnLoadTowns').addEventListener('click', onLoad);

function onLoad(event) {
    event.preventDefault();
    const root = document.getElementById('root');
    const input = document.getElementById('towns').value;
    const towns = input.split(',').map(t => t.trim());
    const result = townTemplate(towns);
    render(result, root);
}