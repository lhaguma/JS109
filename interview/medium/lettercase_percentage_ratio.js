/*
P
- input: String
- output: object
- rules:
  - Percentage of lowercase characters
  - Percentage of uppdercase characters
  - percentage of characters that are neither
  - percenages need be multiplied by 100
  - all percentage points have two decimals
  - percentages are displayed as strings
  - assume that the input string will be have at least one character

E
- given below

D
- strings, array, and objects

A
- make empty object
- turn test cases into object
- get a subset of just lowercase letters
- subset of just uppercase letters
- subset of non - letters
- get the numeric percentage for all of them
- multiply the percentages by 100 and convert them to two decimals
- append percenages as values to the appropriate property name
- return the object

C
*/

function letterPercentages (string) {
  let test = {lowercase : /[a-z]/g, uppercase : /[A-Z]/g, neither : /[^A-Z]/gi};
  let outputObject = {};

  function toPercent (array) {
    return ((array.length / string.length) * 100).toFixed(2);
  }

  for (let key in test) {
    let regex = test[key];
    outputObject[key] = toPercent(string.match(regex) || []);
  }

  return outputObject;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }