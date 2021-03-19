import page from '../node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';

import { dashboardPage } from './views/dashboard.js';
import { myFurniturePage } from './views/myFurniture.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page('/', decorateContext, dashboardPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/create', decorateContext, createPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/my-furniture', decorateContext, myFurniturePage);

setNavigation();

page.start();

const container = document.querySelector('.container');

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setNavigation();
    page.redirect('/');
});

function decorateContext(context, next) {
    context.render = (data) => render(data, container);
    context.setNavigation = setNavigation;
    next();
}

function setNavigation() {
    if (sessionStorage.getItem('userId')) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}