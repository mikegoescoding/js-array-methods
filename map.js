// ─── map() ────────────────────────────────────────────────────────────
// map() creates a new array by transforming every element.
// The original array is never modified.
// Whatever you return becomes the element in the new array.

// Exercise 1 — apply a 10% discount to every price
const prices = [10, 25, 8, 42, 15];
const discounted = prices.map(price => price * 0.9);
console.log("Original:", prices);
console.log("Discounted:", discounted);

// Exercise 2 — combine first and last name into a full name string
const users = [
  { firstName: "Sarah", lastName: "Connor" },
  { firstName: "John",  lastName: "Wick" },
  { firstName: "Ellen", lastName: "Ripley" },
];
const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log("Full names:", fullNames);

// Exercise 3 — the missing return bug
// Without a return statement inside curly braces, map returns undefined.
const numbers = [1, 2, 3, 4];

// Bug — no return, results in [undefined, undefined, undefined, undefined]
const buggy = numbers.map(num => { num * 2; });
console.log("Buggy result:", buggy);

// Fix A — explicit return
const fixedA = numbers.map(num => { return num * 2; });
console.log("Fixed A:", fixedA);

// Fix B — implicit return (no curly braces)
const fixedB = numbers.map(num => num * 2);
console.log("Fixed B:", fixedB);
