/*
P
- input: array
- output: sorted array
- rules: use the merge sort method
  - break elements down into subarrays
  - combine the subarrays using the merger sort function

E
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
- [9, 5, 7, 1]
- [[9, 5], [7, 1]]
- [[[9],[5]], [[7], [1]]]
- [[5, 9], [1, 7]]
- [1, 5, 7, 9]

mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

D
- array

A
- if the array length is 1 return that array
- split the array into two halves a, b
- repeat steps until the inner most array has length 1
- combine a and b using the merge function

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

function mergeSort(array) {
  if (array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let firstHalf = mergeSort(array.slice(0, middle));
  let secondHalf = mergeSort(array.slice(middle));

  return merge(firstHalf, secondHalf);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]