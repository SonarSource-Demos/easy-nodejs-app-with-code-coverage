/**
 * This file is intentionally designed to have high cyclomatic complexity for testing purposes.
 * The function `highCyclomaticComplexity` contains 52 independent decision points (if statements),
 * which results in a cyclomatic complexity of 53.
 */

function highCyclomaticComplexity(input) {
  let result = 0;
  
  if (input === 0)  { result += 1; }
  if (input === 1)  { result += 2; }
  if (input === 2)  { result += 3; }
  if (input === 3)  { result += 4; }
  if (input === 4)  { result += 5; }
  if (input === 5)  { result += 6; }
  if (input === 6)  { result += 7; }
  if (input === 7)  { result += 8; }
  if (input === 8)  { result += 9; }
  if (input === 9)  { result += 10; }
  if (input === 10) { result += 11; }
  if (input === 11) { result += 12; }
  if (input === 12) { result += 13; }
  if (input === 13) { result += 14; }
  if (input === 14) { result += 15; }
  if (input === 15) { result += 16; }
  if (input === 16) { result += 17; }
  if (input === 17) { result += 18; }
  if (input === 18) { result += 19; }
  if (input === 19) { result += 20; }
  if (input === 20) { result += 21; }
  if (input === 21) { result += 22; }
  if (input === 22) { result += 23; }
  if (input === 23) { result += 24; }
  if (input === 24) { result += 25; }
  if (input === 25) { result += 26; }
  if (input === 26) { result += 27; }
  if (input === 27) { result += 28; }
  if (input === 28) { result += 29; }
  if (input === 29) { result += 30; }
  if (input === 30) { result += 31; }
  if (input === 31) { result += 32; }
  if (input === 32) { result += 33; }
  if (input === 33) { result += 34; }
  if (input === 34) { result += 35; }
  if (input === 35) { result += 36; }
  if (input === 36) { result += 37; }
  if (input === 37) { result += 38; }
  if (input === 38) { result += 39; }
  if (input === 39) { result += 40; }
  if (input === 40) { result += 41; }
  if (input === 41) { result += 42; }
  if (input === 42) { result += 43; }
  if (input === 43) { result += 44; }
  if (input === 44) { result += 45; }
  if (input === 45) { result += 46; }
  if (input === 46) { result += 47; }
  if (input === 47) { result += 48; }
  if (input === 48) { result += 49; }
  if (input === 49) { result += 50; }
  if (input === 50) { result += 51; }
  if (input === 51) { result += 52; }
  
  return result;
}

// When run from the command line, pass an integer as the first argument.
// For example: `node high_complexity.js 17`
const input = parseInt(process.argv[2], 10) || 0;
console.log("Result:", highCyclomaticComplexity(input));
