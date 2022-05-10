// Sparse Arrays Hackerrank
// Simple Javascript solution

function matchStrings(strings, quesries) {
  return quesries.map(x => strings.filter(y => x === y).length)
}
