import { towns } from './towns.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

const articleTemplate = (towns, match) => html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(t => html`<li>${townTemplate(t, match)}</li>`)}
      </ul>
   </div>
   <input type="text" id="searchText" />
   <button @click=${search}>Search</button>
   <div id="result">${matches(towns, match)}</div>
</article>`;

const townTemplate = (town, match) => html`
   <li class=${match && town.toLowerCase().includes(match.toLowerCase()) ? 'active' : '' }>${town}</li>`;

const body = document.body;
update();

function update(match) {
   const result = articleTemplate(towns, match);
   render(result, body);
}


function search() {
   const match = document.getElementById('searchText').value;
   update(match);
}

function matches(towns, match) {
   const found = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   if (found > 0) {
      return `${found} matches found`;
   }
}