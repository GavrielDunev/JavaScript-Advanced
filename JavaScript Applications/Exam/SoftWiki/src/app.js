import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout as logoutUser } from './api/data.js';
import { allArticlesPage } from './views/allArticles.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', logout);

setNav();

page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalogue', decorateContext, allArticlesPage);
page('/', decorateContext, homePage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/search', decorateContext, searchPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
    next();
}

function setNav() {
    if (sessionStorage.getItem('authToken')) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

async function logout() {
    await logoutUser();
    setNav();
    page.redirect('/');
}