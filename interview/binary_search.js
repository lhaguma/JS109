/*
P
- input: sorted array and a search item, output: index of the search item or -1
- rules:
  - use the binary search as defined by problem
  - all elemtns of the array have the same type and the search item same type
    - find the value at the integer middle
    - compare the search item with middle value
    - if the middle value is less than the serach item discared all previous ele
    - start looking in remaineing elements
    - if the middle value is greater, discared all following elements
  - array will always be sorted
  - empty array?
  - no search item?

E
- given

D
- arrays

A
- find the integer middle value rounded down
- compare the middle value to the search value
  - if the middle value = search value
    - return index of middle value
  - if middle value > search value
    - find new middle value with end being element before previous vlaue
    - if middle value = search value return index else repeate
 - if middle value < search value
  - find new middle value with begin value one element after middle value
  - if new middle value = search value, return it's index
  - else continue
-if no middle value is found that matches the search value return -1

C
*/


function binarySearch (array, searchValue) {
  let middle = Math.ceil(array.length / 2) - 1;

  if (array[middle] === searchValue) return middle;

  if (array[middle] > searchValue) {
    return binarySearch(array.slice(0, middle),searchValue);
  } else if (array[middle] < searchValue) {
    let halfIndex = binarySearch(array.slice(middle + 1),searchValue);
    if (halfIndex >= 0) return halfIndex + middle + 1;
  }

  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6