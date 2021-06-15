/*
P
egyptian fractions
- input: fraction
- output: array of denominators for fractions that sume up to input fraction
- rules: use the fractions object

unegypetion fraction
- input: array of demonitors
- output: sum of the unit fractiosn
- rules: use fraction object

E
- given

D
- array

A
- import the fraction library object

Egyptian function
- input is a percise fraction
- create an empty array
- enter into a loop forever
  - at each itteration:
  - subtract a percise unit fraction from the sum
  - append the denominator once the fration
  - break out of loop when input fraction is less than zero
- return the array of denominators

Unegyptian fraction
- take in the array of denominators
- turn each element inot a unit fraction
- return the sum of all the unit fractions

C
*/

const Fraction = require('fraction.js');

function egyptian(fraction) {
  let result = [];
  let index = 1;

  while (fraction > 0) {
    if (fraction.sub(new Fraction(1, index)) >= 0) {
      fraction = fraction.sub(new Fraction(1, index));
      result.push(index);
    }
    index += 1;
  }

  return result;
}

function unegyptian (array) {
  return String(array.reduce((accum, curr) =>
    accum.add(new Fraction(1, curr)), new Fraction(0, 1)));
}
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
console.log(egyptian(new Fraction(1, 2))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
console.log(egyptian(new Fraction(3, 4))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3