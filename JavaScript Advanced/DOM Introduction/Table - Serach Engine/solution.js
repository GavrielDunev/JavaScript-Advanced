function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll('tbody tr');
      const search = document.querySelector('#searchField').value;

      for (const row of rows) {
         if (row.textContent.toLowerCase().includes(search.toLowerCase())) {
            row.classList.add('select')
         } else {
            row.removeAttribute('class');
         }
      }
   }
}