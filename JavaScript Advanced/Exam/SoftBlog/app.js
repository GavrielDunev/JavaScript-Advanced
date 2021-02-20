function solve(){
   document.querySelector('button').addEventListener('click', create);
   
   function create(ev) {
      let posts = document.querySelector('main').children[0];
      ev.preventDefault();

      let author = document.querySelector('#creator');
      let title = document.querySelector('#title');
      let category = document.querySelector('#category');
      let content = document.querySelector('#content');
      
      let article = el('article');
      let h1 = el('h1', title.value);

      let p1 = el('p', 'Category: ');
      let str1 = el('strong', category.value);
      p1.appendChild(str1);

      let p2 = el('p', 'Creator: ');
      let str2 = el('strong', author.value);
      p2.appendChild(str2);

      let p3 = el('p', content.value);

      let div = el('div');
      div.className = 'buttons';

      let delBut = el('button', 'Delete', 'btn delete');
      delBut.addEventListener('click', () => deleteButton(article));

      let archBut = el('button', 'Archive', 'btn archive');
      archBut.addEventListener('click', () => archive(article));

      div.appendChild(delBut);
      div.appendChild(archBut);

      article.appendChild(h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);

      posts.appendChild(article);
   }

   function deleteButton(article) {
      article.remove();
   }

   function archive(article) {
      let title = article.querySelector('h1');
      article.remove();
      let ol = document.querySelector('ol');
      let li = el('li', title.textContent);
      ol.appendChild(li);
      sortArchive(ol);
   }

   function sortArchive(ol) {
      let lis = document.querySelector('ol').children;
      console.log(lis)
      Array.from(lis).sort((first, second) => first.textContent.localeCompare(second.textContent))
      .forEach(li => ol.appendChild(li));
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