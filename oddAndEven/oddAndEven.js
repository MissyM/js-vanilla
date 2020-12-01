/**In this challenge, we're getting started with conditional statements.
  Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an integer, , perform the following conditional actions:

-If  is odd, print Weird
-If  is even and in the inclusive range of  to , print Not Weird
-If  is even and in the inclusive range of  to , print Weird
-If  is even and greater than , print Not Weird
Complete the stub code provided in your editor to print whether or 
not  is weird.*/

function oddAndEven(n) {
 if(!(n % 2) == 0){
    return console.log("Weird")
 } else if((n % 2) == 0){
   if(n >= 6 && n <= 20) {
     return console.log("weird")
    }
    return console.log("not weird")
 }
}
oddAndEven(24)
