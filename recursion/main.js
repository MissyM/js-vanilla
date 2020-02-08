// Your code here.
let isEven = (N) => N > 0 ? N % 2 === 0 : '??'  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??