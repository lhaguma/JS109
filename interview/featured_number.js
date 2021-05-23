/*
P
- input: number, output: next largest fetured number
- rules:
  - featured number must be odd
  - featured number must be a multiple of 7
  - featured number must have all uniqure digit
  - if no fetured number is found, return error mesage
  - fetured number must be greater than input number

E
- given

D
- numbers

A
- enter into an infinit loop adding one to the input number
- check the result of each iteration meets all the criterias
  - is greater than input number
  - is odd (not divisible by 2)
  - is a mutiple of 7 (divisible by 7)
  - and all digits are different
- break out of loop for first number to meet criterias

*/
let MAX_FEATURED_NUM =  9876543201;

function isUnique(result) {
  let resultStr = String(result);
  let repeats = [];

  for (let idx = 0; idx < resultStr.length - 1; idx += 1) {
    if (resultStr.includes(resultStr[idx], idx + 1)) {
      repeats.push(resultStr[idx]);
    }
  }

  return repeats.length === 0;
}

function featured(num) {

  if (num === MAX_FEATURED_NUM) {
    return "There is no possible number that fulfills those requirements.";
  }

  let result = num;
  while (true) {
    result += 1;
    if ((result > num) && (result % 7 === 0)
    && (result % 2 !== 0) && isUnique(result)) break;
  }

  return result;

}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."