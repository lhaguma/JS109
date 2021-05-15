// 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'

/*
P
- input: string phrase, output: string phrase with all string number turned into digit numbers
- exmplicit rules: Turn all the string word numbers into number digits
- implicit rules: do not change the order of the numbers after conversion and leave the rest of the phrase as is
  - do not mutate the orginal array

E
- shown

D
- arrays

A
- split the phrase into elements of an array
- loop over the pharse array
  - Check if the element is a number word
  - If it's a number word, convert it to a number digit 
  - If it's not a number word, leave it as is
- return a new array with 
*/

wordNumbers = {
  zero : 0,
  one : 1,
  two : 2, 
  three : 3, 
  four : 4, 
  five : 5, 
  six : 6, 
  seven : 7, 
  eight :8, 
  nine : 9,
}

function wordToDigit(string) {
  return string.split(' ').map(word => {
    if (Object.keys(wordNumbers).includes(word)) {
      return wordNumbers[word];
    } else if (!String(word).includes(".")){
      return word
    } else {
      return word.split('.').map(word => {
        if (Object.keys(wordNumbers).includes(word)) {
          return wordNumbers[word];
        } else {
          return word;
        }
    }).join(".");
  }
}).join(" ");
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// console.log("Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
