function solve(s) {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
  }

console.log(solve("abc")); // True, because it contains a,b,c
console.log(solve("abd")); // False, because a, b, d are not consecutive, and c is missing.
console.log(solve("dabc")); // True, because it contains a, b, c, d
console.log(solve("abbc")); // False, because b does not occur once.
console.log(solve("v")); // True