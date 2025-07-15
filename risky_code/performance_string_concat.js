// Inefficient string concatenation in a loop (performance issue)
let result = '';
for (let i = 0; i < 10000; i++) {
  result += i; // Noncompliant: inefficient string concatenation
}
