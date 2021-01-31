function getArticleGenerator(articles) {
    let elements = articles;
    let counter = 0;
    return function process() {
        if (counter < elements.length) {
            let toBeAdded = elements[counter++];
            let content = document.querySelector('#content');
            let article = document.createElement('article');
            article.textContent = toBeAdded;
            content.appendChild(article);
        }
    }
}