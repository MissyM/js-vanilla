/*Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .
*/
const n = 10
function stair() {
  for (let i = 0; i < n; i++) {
    let s = ''
    for (let j = 0; j< n; j++){
      if (j < n - i - 1 ){
        s = s + ' '
      } else {
        s = s + '#'
        }
    }
    console.log(s)
  }
}
stair()

