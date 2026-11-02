/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

let totalSales = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let highValueCount = 0;

for (let i = 0; i < sales.length; i++) {
  const transaction = sales[i];
  totalSales += transaction;

  if (transaction > highestTransaction) {
    highestTransaction = transaction;
  }

  if (transaction < lowestTransaction) {
    lowestTransaction = transaction;
  }

  if (transaction >= 300000) {
    highValueCount++;
  }
}

const averageTransaction = totalSales / sales.length;

console.log("Total Sales Revenue:", totalSales);
console.log("Highest Transaction:", highestTransaction);
console.log("Lowest Transaction:", lowestTransaction);
console.log("Transactions >= Rp300,000:", highValueCount);
console.log("Average Transaction Value:", averageTransaction);