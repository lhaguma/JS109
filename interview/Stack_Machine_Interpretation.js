/*
P
- input: key words and phrases, output: result of operation deemed by input phrase
- explicit rules: strings will be passed in, initialize stack with [] and register with 0
- implicit rules: the last key word needs to be 'PRINT' or nothing is displayed, need to display the the register

E
- given

D
- arrays

A
- write function that takes the commands as arguments
- split the commands into single operations
  - if there is a string number turn it into a number
- iterate over each command and execute the correct command
*/


function isANumber(number){
  return !isNaN(Number(number));
}


function minilang(fullCommand){
  let stack = [];
  let register = 0;
  let commandArray = fullCommand.split(" ").map(word => {
    if(isANumber(word)) {
      return Number(word);
    } else {
      return word;
    }
  });
  
  for(let index = 0; index < commandArray.length; index += 1){
    let command = commandArray[index];
    if (isANumber(command)){
      register = command;
    } else {
      switch (command.toUpperCase()) {
        case 'PRINT': 
          console.log(register);
          break;
        case 'PUSH': 
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'REMAINDER':
          register = Math.floor(register % stack.pop());
          break;
        case 'POP':
          register = stack.pop();
          break;
      }
    }
  }

}

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)