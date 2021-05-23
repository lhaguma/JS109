/*
P
- input: 3 numbers , output: string
- rules:
  - Valid triangles have angles that sum up to 180
  - every angles is greater than 0
  - right triangle has one 90 degrees angles
  - accute has all angles less than 90
  - obtuse has at least one angel that's greater than 90
  - arguments are in degreess (no conversion)
  - input are integers

  E
  - given

  D
 - numbers

  A
  - put all arguments into an array
  - check that the sum of all the numbers is exactly 180
  - check that one of the arguments isn't zero
  - assign each valid traignle a name
  - return invalid for triangles that dont meet conditons above
*/

function triangle (angle1, angle2, angle3) {
  let triangleArray = [...arguments];
  if (triangleArray.includes(0) || (angle1 + angle2 + angle3) !== 180) {
    return 'invalid';
  } else if (triangleArray.filter(angle => angle === 90).length === 1) {
    return 'right';
  } else if (triangleArray.filter(angle => angle >= 90).length === 1) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}


console.log(triangle(60, 70, 50) === 'acute');       // "acute"
console.log(triangle(30, 90, 60) === 'right');       // "right"
console.log(triangle(120, 50, 10) === 'obtuse');      // "obtuse"
console.log(triangle(0, 90, 90) === 'invalid');        // "invalid"
console.log(triangle(50, 50, 50) === 'invalid');       // "invalid"