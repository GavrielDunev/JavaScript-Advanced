function solve() {
  let text = document.querySelector('textarea').value;
  let sentences = text.split('.').filter(s => s.length >= 1);
  let output = document.getElementById('output');
  let counter = 0;
  let paragraphs = [];
  let current = '';
  for (i = 0; i < sentences.length; i++) {
    if (counter < 3) {
      current += sentences[i] + '.';
      counter++;
    } else {
      paragraphs.push(current);
      current = sentences[i] + '.';
      counter = 1;
    }
  }
  if (current) {
    paragraphs.push(current);
  }
  for (let cur of paragraphs) {
    let par = document.createElement('p');
    par.appendChild(document.createTextNode(cur));
    output.appendChild(par);
  }
}