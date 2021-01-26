function solve() {
   const divs = document.querySelectorAll('div[class="product"]');
   let buttons = Array.from(document.querySelectorAll('.add-product'));
   let result = document.getElementsByTagName('textarea')[0];
   let products = [];
   let totalPrice = 0;

   buttons.forEach(b => b.addEventListener('click', add));

   function add(event) {
      let name = event.target.parentNode.parentNode.querySelector('.product-title').textContent;
      let price = Number(event.target.parentNode.parentNode.querySelector('.product-line-price').textContent);
      result.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      totalPrice += price;
      products[name] = 0;
   }

   let checkoutButt = document.querySelector('.checkout');
   let arrProducts = [];
   
   checkoutButt.addEventListener('click', checkout);
   
   function checkout(event) {
      for (let key in products) {
         arrProducts.push(key);
      }
      result.textContent += `You bought ${arrProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      buttons.forEach(b => b.removeEventListener('click', add));
      checkoutButt.removeEventListener('click', checkout);
   }
}