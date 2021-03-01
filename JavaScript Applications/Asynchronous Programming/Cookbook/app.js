window.onload = loadRecipies;

async function loadRecipies() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const response = await fetch(url);
    const recipies = await response.json();
    const main = document.querySelector('main');
    main.innerHTML = '';
    Object.values(recipies).forEach(r => {
        let article = e('article', { className: 'preview' },
            e('div', { className: "title" }, e('h2', {}, r.name)), e('div', { className: "small" }, e('img', { src: r.img })));
        article.addEventListener('click', () => toggleInfo(r._id, article));
        main.appendChild(article);
    });
}

async function toggleInfo(id, preview) {
    const response = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`);
    const details = await response.json();

    let article = e('article', {}, e('h2', { onClick: toggleBack }, details.name), e('div', { className: "band" },
        e('div', { className: "thumb" }, e('img', { src: details.img })),
        e('div', { className: "ingredients" }, e('h3', {}, 'Ingredients:'), e('ul', {}, details.ingredients.map(i => e('li', {}, i)))))
        , e('div', { className: "description" },
            e('h3', {}, 'Preparation:'),
            details.steps.map(s => e('p', {}, s))));

    preview.replaceWith(article);

    function toggleBack() {
        article.replaceWith(preview);
    }
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}