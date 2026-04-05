// ─── Arrow Function Syntax Conversions ───────────────────────────────
// All three versions below are identical. Each is just a shorter way
// to write the one above it.

// Long form — regular function keyword
numbers.map(function(num) {
  return num * 2;
});

// Arrow function — drop 'function', add '=>' after params
numbers.map((num) => {
  return num * 2;
});

// Shorthand — single param drops parens, single expression drops {} and return
numbers.map(num => num * 2);

// ─── The rules ────────────────────────────────────────────────────────
// 1. Curly braces and 'return' are always a pair.
//    Add them together when you need multiple lines.
//    Remove them together when you have one expression.

// 2. Parentheses around a single parameter are optional.
//    Zero params → () required
//    One param   → parens optional: num => or (num) =>
//    Two+ params → () required: (a, b) =>

// ─── Converting both directions ──────────────────────────────────────
// Shorthand to long form:
// users.filter(user => user.age > 18)
// becomes:
// users.filter(function(user) {
//   return user.age > 18;
// })

// Long form to shorthand:
// numbers.map(function(num) {
//   return num + 10;
// })
// becomes:
// numbers.map(num => num + 10)

// ─── Ternary operator ─────────────────────────────────────────────────
// Shorthand for if/else when returning one of two values.
// condition ? valueIfTrue : valueIfFalse

// Long form:
words.reduce((longest, word) => {
  if (longest.length > word.length) {
    return longest;
  } else {
    return word;
  }
}, "");

// Ternary shorthand:
words.reduce((longest, word) =>
  longest.length > word.length ? longest : word
, "");
