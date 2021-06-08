/*
P
  input 1: two numbers representing a fraction
  output 1: array of all the demnominators for an egptian fractor

  input 2: array of egyptian fraction denominators
  ouptut 2: number of the sum of the egyptian fraction

E
- given

D
  1. arrays
  2. arrays

A
  1. number to fraction
    - define two varaibles; sum and outputArray
    - get into an infinite loop starting at one and incremented by 1
    - at each iteration,
      - add the inverse of the iterator to sum
      - continue if sum the number added keeps the sum less than the number
        - add that number to the array
      - if the sum is larger, do not add that number and continue
      - stop loop when number is equal to sum

  2. Fraction to number
    - convert all the elements of the array into a fraction
    - sum the fractions
    - return the sum of the fractions
C
*/

const Fraction = require('fraction.js');

// console.log(new Fraction(0));


function egyptian(fraction) {
  let demnominatorArray = [];
  let demnominator = 1;

  while (fraction > 0) {
    let currentFraction = new Fraction(1, demnominator);

    if (currentFraction <= fraction) {
      fraction = fraction.sub(currentFraction);
      demnominatorArray.push(demnominator);
    }

    demnominator += 1;
  }
  return demnominatorArray;
}

function unegyptian(array) {
  return array.reduce((accum, curr) => accum + new Fraction(1, curr), 0);
}
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
console.log(egyptian(new Fraction(127, 130)));
console.log(egyptian(new Fraction(5, 7)));

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130))) === 0.9769230769230768); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7))) === 0.7142857142857142); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3