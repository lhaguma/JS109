/*
P
- input: number, ouptut: difference is the square of the sum and the sum of the squares
- rules:
  - add from 1 to the input number and then square
  - go from 1 to the input number and square each individual number then sum
  - subtract the sum of square from the squared sum

E
- given

D
- numbers or Arrays

A
- loop from 1 to the input number
- define sumSquare and squareSum
    - at each iteration add the number to sumSquare
    - add the square of the number to squareSum
  - square sumSquare
return the difference of sumSquare and squareSum

*/

function sumSquareDifference(num) {
  let index = 1;
  let sumSquare = 0;
  let squareSum = 0;

  while (index <= num) {
    sumSquare += index;
    squareSum += index ** 2;
    index += 1;
  }

  return (sumSquare ** 2) - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150