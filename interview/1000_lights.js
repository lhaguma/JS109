/*
P
  - input: number of switches output: arrays of switches that are still on
  - rules:
    - pass through all switches trunning them on
    - pass through the next sets of swchitches untill all the sets are done

E
  - given
  - 1 : off, 2 : off, 3 : off , 4 : off, 5 : off
  - round 1:
    - loop 1, 2, 3, 4, 5 (all on)
  - round 2:
   - 2 and 4 (turn off)
  - round 3:
    - 3 


D
  - obj

A
- creat a function called toggle which flips the switch
- create an object of switches from 1 to the input number all off
- creat two loops
  - the outter loops goes from 1 to the number of switches
  - the inner loop goes from the 1 to the number of swiches
  multiplied by the current outter loop
  - only the numbers that are actually switches are included in the looped
  - stop itterating the inner loop once you find a number that's not a switch
  - stop itterating outter loop once you have gone through all the switches
- return the object keys that have values on

C
*/

function lightsOn(switches) {
  // initialize all the switches
  let lightSwitches = {};

  for (let idx = 1; idx <= switches; idx += 1) {
    lightSwitches[idx] = 'Off';
  }

  // Perform switch on and off
  Object.keys(lightSwitches).forEach(lightSwitch => {
    let idx = 1;

    while (lightSwitch * idx <= switches) {
      let currentIndex = lightSwitch * idx;
      if (lightSwitches[currentIndex] === 'Off') {
        lightSwitches[currentIndex] = 'On';
      } else if (lightSwitches[currentIndex] === 'On') {
        lightSwitches[currentIndex] = 'Off';
      }

      idx += 1;
    }
  });
  return Object.entries(lightSwitches).filter(([key, value]) => value === 'On').map(([key, vlaue]) => key);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]