import { html, render } from '../node_modules/lit-html/lit-html.js';

const tbody = document.querySelector('tbody');

initialize();

async function initialize() {
   document.querySelector('#searchBtn').addEventListener('click', () => onClick(data));
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = Object.values(await response.json());
   update(data);
}

const rowTemplate = (data, selected) => html`
   <tr class=${selected ? 'select' : ''}>
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
   </tr>`;

function onClick(data) {
   const match = document.getElementById('searchField').value;
   update(data, match);
}

function update(data, match) {
   const result = data.map(s => rowTemplate(s, includes(s, match)));
   render(result, tbody);
}

function includes(data, match) {
   return Object.values(data).some(d => match && d.toLowerCase().includes(match.toLowerCase()));
}