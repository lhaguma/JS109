/*
P
- input: numeric year, ouput: returns the number of Friday the 13ths
- rules:
  - assume all year inputs are 1752 or greater
  - Calendar assumptions will remain the same in the future
  - all inputs are numbers
  - 0 is not a valid input

E
- given

D
- dates and arrays

A
- find all the fridays in a single year
- filter those fridays to only those that land on the 13th day
- retun the length of the friday the 13th arry

*/
function fridayThe13ths(year) {
  const MONTHS_IN_YEAR = 12;
  const UNLUCKY_DAY = 13;
  const FRIDAY = 5;
  let allDays = [];

  for (let monthIndex = 0; monthIndex < MONTHS_IN_YEAR; monthIndex += 1) {
    let thirteenthDay = new Date(year, monthIndex, UNLUCKY_DAY);
    if (thirteenthDay.getDay() === FRIDAY) {
      allDays.push(thirteenthDay.getDay());
    }
  }
  return allDays.length;
}

console.log(fridayThe13ths(1986) === 1);      // 1
console.log(fridayThe13ths(2015) === 3);      // 3
console.log(fridayThe13ths(2017) === 2);      // 2