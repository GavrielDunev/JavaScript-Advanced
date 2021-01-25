function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementsByTagName('textarea')[0].value;
      input = JSON.parse(input);
      const restaurants = {};

      let bestRestaurantName = '';
      let bestAvgSal = 0;
      for (const current of input) {
         let name = current.split(' - ')[0];
         let workers = current.split(' - ')[1];
         workers = workers.split(', ');
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         let averageSalary = workers.reduce((sum, current) => sum + Number(current.split(' ')[1]), 0) / workers.length;
         if (averageSalary > bestAvgSal) {
            bestAvgSal = averageSalary;
            bestRestaurantName = name;
         }
         workers.sort((first, second) => Number(second.split(' ')[1]) - Number(first.split(' ')[1]));
         let bestSalary = Number(workers[0].split(' ')[1]);
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      }

      let bestRestaurantOuput = document.querySelector('#bestRestaurant p');
      bestRestaurantOuput.textContent = `Name: ${bestRestaurantName} Average Salary: ${restaurants[bestRestaurantName].averageSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurantName].bestSalary.toFixed(2)}`
      let bestWorkers = document.querySelector('#workers p');
      restaurants[bestRestaurantName].workers.forEach(w => bestWorkers.textContent += `Name: ${w.split(' ')[0]} With Salary: ${w.split(' ')[1]} `);
   }
}