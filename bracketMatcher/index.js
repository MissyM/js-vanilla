//Take a string parameter being passed and return 1 if
//the brackets are correctly matched and each one accounted for
//otherwise return 0.
/** Example
 * Input: "(coder)(byte))"
Output: 0
Input: "((coder))(byte)"
Output: 1
 */

function BracketMatcher(str) {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(")
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return 0
      } else {
        stack.pop()
      }
    }
  }
  return stack.length === 0 ? 1 : 0
}

console.log(BracketMatcher("((coder))byte)"))
