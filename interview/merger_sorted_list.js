/*
P
- input: two sorted arrays
- output: one sorted array with elements of the input arrays
- rules: output array cannot be sorted after it's put together
  - output array must be built in order one element at a time

E
- given
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
- 1 ? 2 = 1
[5, 9] [2, 6, 8]
- 5 ? 2 = 2
[5, 9] [6, 8]
- 5 ? 6 = 5
[9] [6, 8]
9 ? 6 = 6
[9] [8]
9 ? 8 = 8
[9] []

[1 2 5 6 8] + [9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

D
- array

A
- make copies or the original arrays
- make an empty array called result
- itterate through the length of the shorest array
- break out of loop when at least one of the array copies is empty
- at each iteration:
  - compare the first elemnt of the arrays
  - put the smaller element into results array
  - remove that element from it's array copy
- continue itteration until one array is emtpy
- return the combination of the result array and the array that's not empty
C
*/

function merge (array1, array2) {
  let result = [];
  let copyA1 = array1.slice();
  let copyA2 = array2.slice();

  while (copyA1.length !== 0 && copyA2.length !== 0) {
    result.push(copyA1[0] < copyA2[0] ? copyA1.shift() : copyA2.shift());
  }

  return result.concat(copyA1.length < copyA2.length ? copyA2 : copyA1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]