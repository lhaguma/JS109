/*
P
  - input: odd number
  - output: nxn diamond made of stars
  - rules: The star is centered and starts with one star
    grows to the odd number length then shrinks back to 1
  - dimond lines will be incrementally increasing by 1
  - diamond will have n lines

E
  - given

D
  - strings

A
  - enter into a loop for half the input number starting at one
  - ouput 2 more stars in each line than the previous line
  - when you reach n stars subtract 2 star from the previous line
  - stop when the number of stars is 1
C
*/

function diamond(stars) {
  let halfwayUp = Math.ceil(stars / 2);
  let lineUp = 1;
  let lineDown = stars - 2;

  while (lineUp <= stars) {
    console.log(`${'*'.repeat(lineUp).padStart(halfwayUp,' ')}`);
    halfwayUp += 1;
    lineUp += 2;
  }

  let halfwayDown = halfwayUp - 2;

  while (lineDown > 0) {
    console.log(`${'*'.repeat(lineDown).padStart(halfwayDown,' ')}`);
    halfwayDown -= 1;
    lineDown -= 2;
  }

}

// diamond(1);
// // logs
// // *
diamond(1);
diamond(3);
diamond(5);
diamond(7);
diamond(9);
diamond(11);
diamond(13);

// logs
//  *
// ***
//  *