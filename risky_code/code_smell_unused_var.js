// Unused variable (code smell)
function calculateSum(a, b) {
  let sum = a + b;
  let unused = 123; // Noncompliant: unused variable
  return sum;
}
