# 8 kyu

# [Find Multiples of a Number](https://www.codewars.com/kata/58ca658cc0d6401f2700045f/javascript)

The function takes two integers and returns an array of multiple numbers, from integer 1 to integer 2.

## Syntax

> findMultiples(`number`, `number`) -> `array`

### Parameters

**paramName**: `int`

- Firsts integer number, defines from where the functions starts to count.

**paramName**: `limit`

- Second integer number, defines where the functions stops to count.

### Return Value: `result`

Array with numbers that are multiples from `int` until `limit`;

## Examples

The function behave is simple, find the numbers that are multiple from one initial point until another point, the limit 


```js
const firstNumber = 2;
const limitNumber = 6;
console.log(findMultiples(firstNumber, limitNumber)); //[2, 4, 6]
``````

```js
const firstNumber = 3;
const limitNumber = 10;
console.log(findMultiples(firstNumber, limitNumber)); //[3, 6, 9]
``````

```js
const firstNumber = 7;
const limitNumber = 12;
console.log(findMultiples(firstNumber, limitNumber)); //[7]
``````

---

> analyze a user's solution to this challenge

## [AaronGrams, et all](https://www.codewars.com/users/AaronGrams)

```js
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result;
  }
```

### Strategy

The most used solution was the same solution that comes to my mind on the first moment

Using a `for` loop with the increasing value regulated by the  `int` variable and pushing the results to the array seems to me the most straight forward solution.

### Implementation

The strategy was simple, declare the function, declare the array that will be created for the results, push the results that meets the criteria to the array.

### Possible Refactors

A possible refactoring on the function was the usage of a `while` loop instead of the `for` loop used on the function.

---

## [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

```js
const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);
```

### Strategy

The strategy of the user was to write the function using the most of `javascript` syntax and trying to resolve it in one line.

### Implementation

The function was builded using `Array.from` method to create the array, what have shortened the code.

### Possible Refactors

No clue about possible refactors, since I not even know if I really understand completely this solution.
---

## Notes

A very simple challenge could be resolved in very different ways, things to take in account

- learn what `~~` means.
