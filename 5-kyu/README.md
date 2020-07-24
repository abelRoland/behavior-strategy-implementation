# 5 kyu

# [RGB To Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001)

The function takes a RGB value and converts to HEX value.

## Syntax

> rgb(`number1`,`number2`,`number3`) -> `string`

### Parameters

**paramName**: `r`

- Number, defines the value from the red on RGB mode.

**paramName**: `g`

- Number, defines the value from the green on RGB mode.

**paramName**: `b`

- Number, defines the value from the blue on RGB mode.


### Return Value: `string`

String value of HEX value;

## Examples

The function behave is simple, takes a RGB value and converts to HEX value.


```js
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3e
``````

---

> analyze a user's solution to this challenge

## [Zhenghu, et all](https://www.codewars.com/users/zhenghu)

```js
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
```

### Strategy

To solve the problem of conversion, this solution decides to split the work in two parts, creating two different functions.

The first function `rgb` just split the numbers and send each one of the numbers to be converted to the second function `toHex`. In the second function, after two conditional statements to handle values above or below the maximum accepted values, the convertion is done.

### Implementation

The strategy was simple, declare the first function, send the values one by one to be converted on the second function, return the converted values.

### Possible Refactors

The conditionals could be done with a ternary operator.

---

## [nzvtrk](https://www.codewars.com/users/nzvtrk)

```js
let rgb = (r, g, b) => [r,g,b].map( (item) => item>=255 ? 'FF' : item<=0 ? '00' : item.toString(16).toUpperCase()).join('')
```

### Strategy

The strategy of the second user was very clear, write everything in one function, trying to write as less as possible code. 

### Implementation

The function is declared, the values pass for a `.map` process, the conditional statements are done with ternary operator and then the conversion is done.

### Possible Refactors

For the sake of simplification I don't see nothing more to refactor, for better understanding would have a lot of things to make it easier to be read.
---

## Notes

This time I could understand both functions and I can see myself resolving in both ways, although I resolve in a different way. 
