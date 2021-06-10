/*
P
- input: odd integer
- output: centered 8 point star
- rules:
  - explicit: minimum integer for a star is 7
  - implicit: center of start is n stars
    - left, center, and right vertically angled stars only have 3 star
    - at each line, the space between the 3 stars changes
    - length of top and bottom line is same as middle line
    - lines closest to the center are the smallest
    - space between first and bottom line is (n - 1)/2 - 1
    - Then space shrinks by 1 until reaching the center

E
- given

D
- strings

A
- iterate through n so each iteration is a line of the star
- when the line number is the middle, output n stars
- at non - middle lines, output 3 stars with space in the front and middle of each star
- the space in the front will start at 0 and increase by 1 until reach middle than decrease
- the space between the stars will start at (n - 1)/2 -1 and increase by 1
- after the mid point, it will decrease by 1

C
*/

function star(starLength) {
  let middle = Math.ceil(starLength / 2) - 1;
  let middleSpace = Math.ceil((starLength - 1) / 2) - 1;

  let line = 0;
  while (line < starLength) {
    if (line === middle) {
      console.log('*'.repeat(starLength));
    } else if (line < middle) {
      console.log(`${' '.repeat(line)}*${' '.repeat(middleSpace - line)}*${' '.repeat(middleSpace - line)}*`);
    } else {
      console.log(`${' '.repeat((starLength - 1) - line)}*${' '.repeat(line - middle - 1)}*${' '.repeat(line - middle - 1)}*`);
    }
    line += 1;
  }
}
star(7);
star(9);
star(11);
star(13);

// 4   0
// 5   1
// 6   2

