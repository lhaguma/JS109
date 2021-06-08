/*
P
- input: 3x3 matrix array, ouput: a transpose of 3x3 array
- rules:
  - must return new array and not modify og array
  - the rows will become the columns

E
- given

D
- arrays

A
- make an empty array
- wrtie two nested arrays
- The outer will iterate through the elements of each subarray
- The inner will iterate through the subArrays
  - At each outer iteration, the element position will stay fixed
  - The subarray will change
  - push each element into the new subArray
  - then push each new sub Array into transpose array
- return new array
C
*/

function transpose(matrix) {
  let transpose = [];

  for (let elem = 0; elem < matrix[0].length; elem += 1) {
    let newSubArray = [];

    for (let subArray = 0; subArray < matrix.length; subArray += 1) {
      newSubArray.push(matrix[subArray][elem]);
    }

    transpose.push(newSubArray);
  }

  return transpose;
}

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]