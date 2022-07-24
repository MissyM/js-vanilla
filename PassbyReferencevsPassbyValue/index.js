let a = 10; //10 is the value of a variable
let b = "Hi"; // te same for b wich value is "Hi"
let c = a; // Here c is doing reference to the a values

c = c + 1 ; // = 11 Because c values is 10 values but
// a stay in the same value.
// The arrays and objects are not primitive values 
//like int, string, boolean, etc Teir value is a memory address

let d = [1, 2]; //The value is a memory address, and the memory
// address point to the array [1, 2].


let e = d; // the value of e is the same memory address as d
//for this reason if you do

e.push(3) // the value of d change too, both change

e = [4, 5, 6]

// console.log(`a = ${a}`)
// console.log(`b= ${b}`)
// console.log(`c= ${c}`) 
// console.log(`d= ${d}`) 
// console.log(`e= ${e}`) 

let ar1 = [1, 2];
console.log(ar1);
add(ar1, 3)
console.log('ar1=', ar1)

function add (arr, elm) {
  
  return console.log(arr = arr[elm])
}