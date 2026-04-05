// ─── reduce() ─────────────────────────────────────────────────────────
// reduce() collapses an array down to a single value.
// That value can be a number, string, object, or array.
// The accumulator carries the running result from one pass to the next.
// Always set the initial value (second argument) — skipping it causes bugs.
// Always return the accumulator or it becomes undefined on the next pass.

// Exercise 1 — sum all scores
const scores = [14, 8, 22, 5, 19, 11];
const totalScore = scores.reduce((accumulator, score) => accumulator + score, 0);
console.log("Total score:", totalScore);

// Exercise 2 — find the longest word
const words = ["cat", "elephant", "dog", "rhinoceros", "ox"];
const longestWord = words.reduce((longest, word) => {
  if (longest.length > word.length) {
    return longest;
  } else {
    return word;
  }
}, "");
console.log("Longest word:", longestWord);

// Shorthand version using a ternary
const longestWordShort = words.reduce((longest, word) =>
  longest.length > word.length ? longest : word
, "");
console.log("Longest word (ternary):", longestWordShort);

// Exercise 3 — count occurrences (object accumulator pattern)
// This is the most common real-world reduce pattern.
// The accumulator is an object, not a number.
// Each key is a value from the array, each value is the count.
const votes = ["yes", "no", "yes", "yes", "no", "yes", "no"];
const voteCount = votes.reduce((tally, vote) => {
  if (tally[vote]) {
    tally[vote] = tally[vote] + 1;
  } else {
    tally[vote] = 1;
  }
  return tally;
}, {});
console.log("Vote count:", voteCount); // { yes: 4, no: 3 }
