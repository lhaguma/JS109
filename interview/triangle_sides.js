/*
P
- input: 3 numerbers, output: string
- rules:
  - explicit: must return: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
    - The sum of the two shortest sides must be greater than the longer side
    - every side must be greater than zero
  implicit:
    - can accept decimal values

E
- given

D
- Arrays and numbers

A
- function takes three numbers
- put each number as element of array
- sort the array from least to greatest
- check if the array has any 0s, if it does return 'invalid'
- add the first two elements and check that they strictly greater than the last
- if all condictions are met:
  - if all sides are equale return 'equilateral'
  - if two sides equal return 'Isosceles'
  - if non equal return 'scalene'

*/

function triangle(side1, side2, side3) {
  let triangle = [...arguments].sort((a, b) => a - b);
  if (triangle.includes(0) || ((triangle[0] + triangle[1]) <= triangle[2])) {
    return 'invalid';
  } else if (triangle.every(num => num === side1)) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3) === 'equilateral');    // "equilateral"
console.log(triangle(3, 3, 1.5) === 'isosceles');    // "isosceles"
console.log(triangle(3, 4, 5) === 'scalene');        // "scalene"
console.log(triangle(0, 3, 3) === 'invalid');        // "invalid"
console.log(triangle(3, 1, 1) === 'invalid');        // "invalid"
