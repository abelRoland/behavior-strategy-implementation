# 6 kyu

# [Sum of Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00/)

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

## Syntax

> n(`n`) -> `number`

### Parameters

**paramName**: `n`

- Number, defines the value for the sum.


### Return Value: `number`

The value of the sum;

## Examples

The function behave is simple, takes a number and converts the digital root.


```js
n(16) // returns 7 --> 1 + 6
n(942) // returns 6 --> 9 + 4 + 2 = 15  -->  1 + 5 
``````

---

> analyze a user's solution to this challenge

## [Balkoth, et all](https://www.codewars.com/users/Balkoth)

```js
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
```

### Strategy

Again, the shortest way to resolve, not to readable for human beings, but works for machines.

### Implementation


### Possible Refactors

One possible refactor, within the same idea, is:

```js
const digital_root = (n) => (n === 0) ? 0 : n % 9 || 9;

```

---

## [boriskaiser et all](https://www.codewars.com/users/boriskaiser)

```js
function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}
```

### Strategy

This is already a more human-friendly solution. Cast the number to string, uses `eval`, `split` and `join` to evaluate the numbers, and when the number is just one digit (conditional `if (n < 9)`) returns the number.

### Implementation

Already explained on strategy.

### Possible Refactors

Don't see too much refactors that would really have a big impact on the function.
---

## Notes
