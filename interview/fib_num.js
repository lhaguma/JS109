/*
P
- input: nth fibinacci sequece , ouptut: the fibinacci number at that location
- explitict reules: use recursive formula, the first two numbers will always be 1
- implicit rules: only use recursive for inputes greater than 2

E - 
fibonacci(1);       // 1
fibonacci(2);       // 1

fibonacci(3) = fib(3-1) + fib(3-2) = fib(2) + fib(1) = 2       // 2
fibonacci(4) = fib(4-1) + fib(4-2) = fib(3) + fib(2) = fib(3-1) + fib(3-2) + fib(2) = fib(2) +  fib(1) + fib(2) = 3     // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

D
- numbers

A
- defined function fibonacci which takes one argument num
- if the num is 1 or two return 1
- if num is greater than 2
  - call fibonacci(n-1) + fibonacci(n-1)
*/
// // recusrive
// function fibonacci(num) {
//   if(num <= 2) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// non recursive
function fibonacci(num){
  // first two fibonacci numbers are 1
  if ([1, 2].includes(num)) return 1;

  let first = 1;
  let second = 1;
  let result = 0;

  for(let seq = 3; seq <= num; seq += 1) {
    result = first + second;
    
    second = first;
    first = result;
  }
  return result;

}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

console.log(fibonacci(1) === 1);       // 1
console.log(fibonacci(2) === 1);       // 1
console.log(fibonacci(3) === 2);       // 2
console.log(fibonacci(4) === 3);       // 3
console.log(fibonacci(5) === 5);       // 5
console.log(fibonacci(20) === 6765);      // 6765
console.log(fibonacci(12) === 144);      // 144
console.log(fibonacci(20) === 6765);       
console.log(fibonacci(50) === 12586269025);       // 12586269025
console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050
