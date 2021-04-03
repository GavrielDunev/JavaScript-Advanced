import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout as logoutUser } from './api/data.js';
import { allMemesPage } from './views/allMemes.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myProfilePage } from './views/myProfile.js';
import { registerPage } from './views/register.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);
page('/allMemes', decorateContext, allMemesPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/myProfile', decorateContext, myProfilePage);

setNavBar();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNavBar = setNavBar;
    next();
}

function setNavBar() {
    const email = sessionStorage.getItem('email');
    if (email) {
        document.querySelector('div.user').style.display = '';
        document.querySelector('div.guest').style.display = 'none';
        document.querySelector('div.profile span').innerHTML = `Welcome, ${email}`;
    } else {
        document.querySelector('div.user').style.display = 'none';
        document.querySelector('div.guest').style.display = '';
    }
}

async function logout() {
    await logoutUser();
    setNavBar();
    page.redirect('/');
}