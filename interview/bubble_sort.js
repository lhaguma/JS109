/*
P
- input: unsorted array, ouput: sorted array
- rules
  - iterate through two sequencial elemements of the array
  - check if first is larger the second
    - if it's larger swap the elements
    - else continue
  - continue iteration until array has no more swaping
    - each sequencial pair is ordered
*/

function bubbleSort (array) {

  while (true) {
    let sorted = false;

    for (let idx = 1; idx < array.length; idx += 1) {
      if (array[idx - 1] > array[idx]) {
        sorted = true;
        [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      }
    }

    if (!sorted) break;
  }

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]