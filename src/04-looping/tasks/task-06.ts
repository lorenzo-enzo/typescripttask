/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */


const stockQuantities = [0, 5, 12, 0, 8, 20, 15, 3, 25, 0];

let outOfStockCount = 0;
let lowStockCount = 0;
let safeStockCount = 0;
let totalInventory = 0;

for (let i = 0; i < stockQuantities.length; i++) {
  const quantity = stockQuantities[i];
  totalInventory += quantity;

  if (quantity === 0) {
    outOfStockCount++;
  } else if (quantity < 10) {
    lowStockCount++;
  } else {
    safeStockCount++;
  }
}

const averageStock = totalInventory / stockQuantities.length;

console.log("Out of Stock Products:", outOfStockCount);
console.log("Low Stock Products:", lowStockCount);
console.log("Safe Stock Products:", safeStockCount);
console.log("Total Inventory:", totalInventory);
console.log("Average Stock Quantity:", averageStock);

