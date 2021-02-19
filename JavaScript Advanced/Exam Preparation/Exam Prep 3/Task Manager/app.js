function solve() {
    document.querySelector('#add').addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault();
        let task = document.querySelector('#task');
        let description = document.querySelector('#description');
        let date = document.querySelector('#date');
        if (task.value == '' || description.value == '' || date.value == '') {
            return;
        } else {
            let section = document.querySelectorAll('section div')[3];
            
            let article = el('article');
            let h3 = el('h3', task.value);
            let p1 = el('p', 'Description: ' + description.value);
            let p2 = el('p', 'Due Date: ' + date.value);
            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);

            let divEl = el('div');
            divEl.className = 'flex';
            
            let startBut = el('button', 'Start', 'green');
            startBut.addEventListener('click', () => start(article, startBut, divEl));

            let deleteBut = el('button', 'Delete', 'red');
            deleteBut.addEventListener('click', () => del(article));

            divEl.appendChild(startBut);
            divEl.appendChild(deleteBut);

            article.appendChild(divEl);
            section.appendChild(article);
        }
    }

    function start(article, startBut, divEl) {
        startBut.remove();
        let finishBut = el('button', 'Finish', 'orange');
        finishBut.addEventListener('click', () => complete(divEl, article));
        divEl.appendChild(finishBut);
        document.querySelector('#in-progress').appendChild(article);
    }

    function del(article) {
        article.remove();
    }

    function complete(divEl, article) {
        divEl.remove();
        document.querySelector('.green').parentNode.parentNode.children[1].appendChild(article);
    }

    function el(type, text, cName) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        if (cName) {
            element.className = cName;
        }
        return element;
    }
}