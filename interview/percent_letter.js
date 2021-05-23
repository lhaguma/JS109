/*
P
- input: string phrase, output; object
- ex rules: percentage letters in string that are lowercase/uppercase/neither
  - input will always have at least one letter
- im rules: percetages are strings with two decimal values

E
- given

D
- arrays and object

A
- function takes in argument 'string'
- initialize empty object
- split string into charcters and set array length as 'total'
- filter to only lowercase and find length of array and divide by 'total'
- fildter again to uppercase and find lennth of array and divide by 'total'
- filter again to non alpha and find length of array and divide by 'total'
- convert each percentage into string and and only leave two decimal places
*/


function letterPercentages(string) {
  let total = string.length;

  function percent (regex) {
    let stringArray = string.match(regex) || [];
    return Number.parseFloat((stringArray.length / total) * 100).toFixed(2);
  }

  return {
    lowercase : percent(/[a-z]/g),
    uppercase : percent(/[A-Z]/g),
    neither : percent(/[^a-z]/gi),
  };
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }