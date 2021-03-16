import { html, render } from '../node_modules/lit-html/lit-html.js';


const selectTemplate = (data) => html`
<select id="menu">${data.map(d => html`<option .value=${d._id}>${d.text}</option>`)}
</select>`;

const path = 'http://localhost:3030/jsonstore/advanced/dropdown';
const div = document.querySelector('div');
const input = document.getElementById('itemText');

start();

async function start() {
    document.querySelector('form').addEventListener('submit', (event) => addItem(event, list));
    const response = await fetch(path);
    const list = Object.values(await response.json());
    update(list);
}

function update(list) {
    const result = selectTemplate(list);
    render(result, div);
}


async function addItem(event, list) {
    event.preventDefault();

    const response = await fetch(path, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({text: input.value})
    });

    const data = await response.json();
    list.push(data);
    update(list);
    event.target.reset();
}