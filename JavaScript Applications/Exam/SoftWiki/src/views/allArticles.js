import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllArticles } from '../api/data.js';

const allArticlesTemplate = (articles) => html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>

    ${articles.length > 0 
    ? articles.map(articleTempate)
    : html`<h3 class="no-articles">No articles yet</h3>`}

</section>`;

const articleTempate = (article) => html`
<a class="article-preview" href="/details/${article._id}">
        <article>
            <h3>Topic: <span>${article.title}</span></h3>
            <p>Category: <span>${article.category}</span></p>
        </article>
    </a>`;

export async function allArticlesPage(ctx) {
    const articles = await getAllArticles();
    ctx.render(allArticlesTemplate(articles));
}