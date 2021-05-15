// recursive
let fibObj = {1:1, 2:1};//initial values in the fibonacci sequence

function fibonacci(num) {
  if (fibObj[num]){
    return fibObj[num];
  } else {
    fibObj[num] = fibonacci(num - 1) + fibonacci(num - 2)
    return fibObj[num];
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibObj);



// console.log(fibonacci(1) === 1);       // 1
// console.log(fibonacci(2) === 1);       // 1
// console.log(fibonacci(3) === 2);       // 2
// console.log(fibonacci(4) === 3);       // 3
// console.log(fibonacci(5) === 5);       // 5
// console.log(fibonacci(20) === 6765);      // 6765
// console.log(fibonacci(12) === 144);      // 144
// console.log(fibonacci(20) === 6765);       
// console.log(fibonacci(50) === 12586269025);       // 12586269025
// console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050
