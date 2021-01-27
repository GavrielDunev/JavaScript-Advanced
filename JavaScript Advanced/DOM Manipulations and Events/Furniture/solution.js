function solve() {
  document.getElementById('exercise').addEventListener('click', onClick);
  let textAreas = document.querySelectorAll('textarea');
  function onClick(event) {
    if (event.target.textContent === 'Generate') {
      text = JSON.parse(textAreas[0].value);
      for (const obj of text) {
        let row = document.createElement('tr');
        let elImage = document.createElement('td');
        let image = document.createElement('img');
        image.src = obj.img;
        elImage.appendChild(image);
        row.appendChild(elImage);

        let elName = document.createElement('td');
        let name = document.createElement('p');
        name.textContent = obj.name;
        elName.appendChild(name);
        row.appendChild(elName);

        let elPrice = document.createElement('td');
        let price = document.createElement('p');
        price.textContent = obj.price;
        elPrice.appendChild(price);
        row.appendChild(elPrice);

        let elDecFactor = document.createElement('td');
        let decF = document.createElement('p');
        decF.textContent = obj.decFactor;
        elDecFactor.appendChild(decF);
        row.appendChild(elDecFactor);

        let elMark = document.createElement('td');
        let mark = document.createElement('input');
        mark.type = 'checkbox';
        elMark.appendChild(mark);
        row.appendChild(elMark);
        document.querySelector('tbody').appendChild(row);
      }
    } else if (event.target.textContent === 'Buy') {
      const furniture = [];
      let totalPrice = 0;
      let decorationFactor = 0;
      let checked = document.querySelectorAll('input[type=checkbox]:checked');
      for (const current of checked) {
        let info = Array.from(current.parentNode.parentNode.querySelectorAll('p'));
        const [name, price, decFactor] = info;
        furniture.push(name.textContent);
        totalPrice += Number(price.textContent);
        decorationFactor += Number(decFactor.textContent);
      }

      textAreas[1].value = `Bought furniture: ${furniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor / furniture.length}`
    }
  }
}