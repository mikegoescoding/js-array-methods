// ─── find(), some(), every(), forEach() ──────────────────────────────
//
// forEach() — loops over every element, returns nothing
// find()    — returns the FIRST element that passes the test, or undefined
// some()    — returns true if AT LEAST ONE element passes
// every()   — returns true only if ALL elements pass

const students = [
  { name: "Maria", grade: 91, passed: true  },
  { name: "James", grade: 45, passed: false },
  { name: "Priya", grade: 78, passed: true  },
  { name: "Tom",   grade: 38, passed: false },
  { name: "Leila", grade: 95, passed: true  },
];

// forEach — log each student's name and grade
students.forEach(student => console.log(`${student.name}: ${student.grade}`));

// find — get the first student who failed
const firstFailure = students.find(student => !student.passed);
console.log("First failure:", firstFailure);

// some — check if any student scored above 90
const hasHighScorer = students.some(student => student.grade > 90);
console.log("Has a scorer above 90:", hasHighScorer);

// every — check if all students passed
const allPassed = students.every(student => student.passed);
console.log("All passed:", allPassed);

// Quick comparison — same array, four different questions:
// forEach → does something, returns nothing
// find    → returns { name: "James", grade: 45, passed: false }
// some    → returns true  (Maria and Leila scored above 90)
// every   → returns false (James and Tom did not pass)
