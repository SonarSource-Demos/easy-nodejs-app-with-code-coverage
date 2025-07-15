// Deeply nested if statements (cognitive complexity)
function checkValues(a, b, c, d) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          return true; // Noncompliant: too much nesting
        }
      }
    }
  }
  return false;
}
