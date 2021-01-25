function search() {
   const towns = Array.from(document.querySelectorAll('ul#towns li'));
   const search = document.querySelector('#searchText').value;
   let matches = 0;
   for (let town of towns) {
      if (town.textContent.toLowerCase().includes(search.toLowerCase())) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`
}