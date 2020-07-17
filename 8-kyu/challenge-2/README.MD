# 8 kyu

# [Coefficients of the Quadratic Equation](https://www.codewars.com/kata/5d59576768ba810001f1f8d6/javascript)

The function needs to find the coefficients of quadratic equation of the given two roots (x1 and x2).

## Syntax

> Quadratic(`number`, `number`) -> `array`

### Parameters

**paramName**: `int`

- The first root.

**paramName**: `int`

- The second root.

### Return Value: `result`

Array with the coeffecient of quadratic function;

## Examples


```js
quadratic(1,2) = (1, -3, 2)
quadratic(0,1) = (1, -1, 0)
``````

---

> analyze a user's solution to this challenge

## [4erkashin, et all](https://www.codewars.com/users/4erkashin)

```js
function quadratic(x1, x2){
   return [1, -(x2 + x1), (x1 * x2)]
}
```

### Strategy

I have no clue about the strategy. I pass hours and hours looking for challenges that could inspire me, but since nothing of this is things that I feel a need in my daily coding life, I didn't feel any inspiration with nothing that I have seen so far in Codewars. Nevertheless, I put the function here for in the case that in the future I need to use this kind of things, then I can comeback and study it.

### Implementation


### Possible Refactors

---

## Notes

I still need to get into resolve problems that doesn't resolve real problems.