// ─── filter() ─────────────────────────────────────────────────────────
// filter() creates a new array containing only elements that pass a test.
// Your function must return true (keep) or false (drop).
// The new array can be shorter than the original — or even empty.

const temperatures = [72, 85, 61, 90, 55, 78, 93, 68];
const products = [
  { name: "Laptop",   inStock: true  },
  { name: "Mouse",    inStock: false },
  { name: "Keyboard", inStock: true  },
  { name: "Monitor",  inStock: false },
  { name: "Webcam",   inStock: true  },
];

// Exercise 1 — filter temperatures above 80
const hotDays = temperatures.filter(temp => temp > 80);
console.log("Hot days:", hotDays);

// Exercise 2 — filter to only in-stock products
const inStockItems = products.filter(product => product.inStock);
console.log("In stock:", inStockItems);

// Exercise 3 — chain filter() and map() together
// Step 1: filter to in-stock only
// Step 2: map to get just the names
const inStockNames = products
  .filter(product => product.inStock)
  .map(product => product.name);
console.log("In-stock names:", inStockNames);
