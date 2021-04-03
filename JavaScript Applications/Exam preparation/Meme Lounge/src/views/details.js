import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemeById, deleteMeme } from '../api/data.js';

const detailsTemplate = (meme, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}
    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            ${meme._ownerId != sessionStorage.getItem('userId')
             ? ''
            : html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click="${(event) => onDelete(event, meme._id)}" class="button danger">Delete</button>`}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const meme = await getMemeById(id);
    ctx.render(detailsTemplate(meme, onDelete));

    async function onDelete(event, id) {
        event.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this meme ?');
        if (confirmation) {
            await deleteMeme(id);
            ctx.page.redirect('/allMemes');
        }
    }
}