# 7 kyu

# [Consecutive letters](https://www.codewars.com/kata/5ce6728c939bf80029988b57)

The function takes one string and returns true if the characters are in alphabet order, false if not.

## Syntax

> solve(`string`) -> `boolean`

### Parameters

**paramName**: `s`

- String, defines from string to be evaluated.


### Return Value: `return`

Boolean value returned after evaluation;

## Examples

The function behave is simple, evaluate if the string is in alphabet order or not.


```js
const s = 'abc';
console.log(solve(s)); //True
``````

```js
const s = 'abd';
console.log(solve(s)); //False

``````

```js
const s = 'dabc';
console.log(solve(s)); //True

``````

---

> analyze a user's solution to this challenge

## [Unnamed, et all](https://www.codewars.com/users/Unnamed)

```js
function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}
```

### Strategy

The most used solution was the same solution that comes to my mind on the first moment

The function return a string with the alphabet evaluating the string with the `includes` method.
After the string was copied with the `spread` operator sorted with `sort()` method and joined again, with `join()` method.

### Implementation

The strategy was simple, declare the function, evaluate the code and return a boolean.

### Possible Refactors

Couldn't think about refactors for this function.

---

## [jgdodson](https://www.codewars.com/users/jgdodson)

```js
function solve(s) {

  if (s.length === 1) {
    return true;
  }

  const sortedChars = s.split('').sort().join('');

  for (let i=1; i<sortedChars.length; i++) {
    if (sortedChars.charCodeAt(i) - sortedChars.charCodeAt(i-1) !== 1) {
      return false
    }
  }

  return true;
}
```

### Strategy

The strategy is similar but different.

### Implementation

One of the differences is that starts with a shortcut function for the case of just one letter be entered, on this case the function will evaluate always true, so no need to pass on the body function. Other difference is that it seems that this function is build more on the step by step way of programming, having a `const` declared, that makes the work of `split` `sort` and `join` the string and a `loop` to evaluate the characters order.

### Possible Refactors

Also on this function a `while` loop could be used.
---

## Notes

This time I could understand both functions and I can see myself resolving in both ways.
