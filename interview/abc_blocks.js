/*
P
  - input: string
  - output: Boolean
  - Rules: return true is word doesnt use any of the block pairs
    - return false if word uses two of the letters on the block pair

E
  - given

D
  - array

A
- creat 2 dimensional array of block pairs in uppercase
- convert word into uppercase array of letters
- itterate through the block block pairs
- check that no two pairs are in the word at the same time
- return true if the non of pairs are both used
- return false if at least one of the pairs are used

C
*/

let block = [['B','O'], ['X','K'], ['D','Q'], ['C','P'], ['N','A'],
  ['G','T'], ['R','E'], ['F','S'], ['J','W'], ['H','U'],
  ['V','I' ], ['L','Y'], ['Z','M']];

function isBlockWord(word) {
  let result = block.map(pair => {
    return pair.every(letter => word.toUpperCase().includes(letter));
  });

  return result.every(pairMatch => pairMatch === false);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true