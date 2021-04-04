import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteArticle, getArticle } from '../api/data.js';

const detailsTempate = (article, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">
            ${sessionStorage.getItem('userId') == article._ownerId ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${article._id}" class="btn edit">Edit</a>` : ''}
            <a href="/" class="btn edit">Back</a>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const article = await getArticle(id);
    ctx.render(detailsTempate(article, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this article ?');
        if (confirmed) {
            await deleteArticle(id);
            ctx.page.redirect('/');
        }
    }
}