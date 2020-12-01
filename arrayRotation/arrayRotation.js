/**
 * A left rotation on an array shifts each of the array's elements 1 unit to 
 * left. For example, if 2 left rotation are performed on array [1,2,3,4,5],
 * then the array would become [3,4,5,1,2].
 * Task
*Given an integer, , perform the following conditional actions:

*If  is odd, print Weird
*If  is even and in the inclusive range of  to , print Not Weird
*If  is even and in the inclusive range of  to , print Weird
*If  is even and greater than , print Not Weird
*Complete the stub code provided in your editor to print whether or not  is weird.*
 */
function rotLeft(arr, rotations) {
  for(let i= 0; i < rotations; i++) {
   let frontItem = arr.shift()
   arr.push(frontItem)
  }
   return arr
}
const numRotation = 3
const sampleArr = [1,2,3,4,5]

const expectedOutput = [3,4,5,1,2]


console.log(rotLeft(sampleArr, 2))