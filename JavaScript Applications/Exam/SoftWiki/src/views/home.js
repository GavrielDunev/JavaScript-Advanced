import {html} from '../../node_modules/lit-html/lit-html.js';
import { getRecentArticles } from '../api/data.js';

const homeTemplate = (recentJs, recentPython, recentJava, recentCSharp) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${recentJs ? html`
        <article>
            <h3>${recentJs.title}</h3>
            <p>${recentJs.content}</p>
            <a href="/details/${recentJs._id}" class="btn details-btn">Details</a>
        </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${recentCSharp ? html`
        <article>
            <h3>${recentCSharp.title}</h3>
            <p>${recentCSharp.content}</p>
            <a href="/details/${recentCSharp._id}" class="btn details-btn">Details</a>
        </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${recentJava ? html`
        <article>
            <h3>${recentJava.title}</h3>
            <p>${recentJava.content}</p>
            <a href="/details/${recentJava._id}" class="btn details-btn">Details</a>
        </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${recentPython ? html`
        <article>
            <h3>${recentPython.title}</h3>
            <p>${recentPython.content}</p>
            <a href="/details/${recentPython._id}" class="btn details-btn">Details</a>
        </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    </section>
</section>`;

export async function homePage(ctx) {
    const recentArticles = await getRecentArticles();
    const recentJs = recentArticles.find(a => a.category == 'JavaScript');
    const recentPython = recentArticles.find(a => a.category == 'Python');
    const recentJava = recentArticles.find(a => a.category == 'Java');
    const recentCSharp = recentArticles.find(a => a.category == 'C#');
    ctx.render(homeTemplate(recentJs, recentPython, recentJava, recentCSharp));
}