/*
P
- input: array matrix, output: array matrix rotated 90 degres
- rules:
  - columns become rows but inputed in reverse order
  - function that can take any MxN matrix
  - function returns new matrix

E
- given

D
- Arrays

A
- initialize empty array
- outer loop will iterate through the columns of the matrix
  - (element of subArray)
- inner loop will iterate through the rows of the matrix
  - (entired subArray)
- in the outer loop, push a new empty array
- in the inner loop, push each columns elements in reverse order to new array *
  - loop from the length of input array to zero
  - at each iternation, push elements into new sub-array
- return rotated array

C
*/
function getNxMEmptyMatrix(matrix) {
  let emptyMatrix = [];

  for (let row = 0; row < matrix[0].length; row += 1) {
    emptyMatrix.push([]);
  }

  return emptyMatrix;
}

function rotate90(matrix) {
  let rotatedArray = getNxMEmptyMatrix(matrix);

  for (let column = 0; column < matrix[0].length; column += 1) {

    for (let rows = matrix.length - 1; rows >= 0; rows -= 1) {
      rotatedArray[column].push(matrix[rows][column]);
    }
  }
  return rotatedArray;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]