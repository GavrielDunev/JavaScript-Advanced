import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchByTitle } from '../api/data.js';

const searchTemplate = (articles, onSearch, title) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input id="searchQuery" type="text" placeholder="Search by article title" name="search" .value=${title || ''}>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${articles.length > 0 ? articles.map(articleTemplate)
             : html`<h3 class="no-articles">No matching articles</h3>`}
    </div>
</section>`;

const articleTemplate = (article) => html`
<a class="article-preview" href="/details/${article._id}">
            <article>
                <h3>Topic: <span>${article.title}</span></h3>
                <p>Category: <span>${article.category}</span></p>
            </article>
        </a>`;

export async function searchPage(ctx) {
    const title = ctx.querystring.split('=')[1] || '';
    const articles = title ? await searchByTitle(title) : [];
    ctx.render(searchTemplate(articles, onSearch, title));

    function onSearch(event) {
        event.preventDefault();
        const query = document.getElementById('searchQuery').value;
        ctx.page.redirect('/search?query=' + query);
    }
}