function solve() {
  let text = document.querySelector('#text').value;
  const convertionType = document.querySelector('#naming-convention').value;
  let result = document.querySelector('#result');

  let modifiedText = '';
  text = text.split(' ');

  if (convertionType === 'Camel Case') {
    modifiedText += text[0].toLowerCase();
    for (i = 1; i < text.length; i++) {
      const current = text[i];
      modifiedText += current[0].toUpperCase() + current.slice(1).toLowerCase();
    }
  } else if (convertionType === 'Pascal Case') {
    for (i = 0; i < text.length; i++) {
      const current = text[i];
      modifiedText += current[0].toUpperCase() + current.slice(1).toLowerCase();
    }
  } else {
    modifiedText = 'Error!';
  }
  result.textContent = modifiedText;
}