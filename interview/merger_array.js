/*
P
- input: two sorted arrays, output: one sorted arrays
- rules:
  - cannot use the sort method
  - cannot mutate input arrays
  - ignore empty arrays on either side

E
- give

D
- arrays

A
- create an empty array
- iterate through both input arrays
- check if the next number is in either of the first or second array
- if the next number is in either, push that the elements into the empty array
- return the resulting sorted array

C
*/

function merge (array1, array2) {
  let result = [];
  let idx = 0;

  while (idx <= Math.max(...array1, ...array2)) {
    let currNum = idx;

    if (array1.includes(idx) && array2.includes(idx)) {
      array1.filter(num => num === currNum).forEach(num => result.push(num));
      array2.filter(num => num === currNum).forEach(num => result.push(num));

    } else if (array1.includes(idx)) {
      array1.filter(num => num === currNum).forEach(num => result.push(num));

    } else if (array2.includes(idx)) {
      array2.filter(num => num === currNum).forEach(num => result.push(num));
    }

    idx += 1;
  }

  return result;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]