//Given an array with two strings N and K. Find the min substring which contain the
//characters of K in N
function MinWindowSubstring(strArr) {
  let string = strArr[0]
  let letters = strArr[1]

  let shortestString = null

  // for (let i = letters.length; i <= string.length; i++) {
  //   for (let j = 0; j <= string.length - letters.length; j++) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let testString = string.substr(i, j - i + 1)
      console.log(testString)
      if (subIncludesAll(testString, letters)) {
        if (
          shortestString === null ||
          testString.length < shortestString.length
        ) {
          shortestString = testString
        }
      }
    }
  }
  return shortestString

  function subIncludesAll(str, letters) {
    for (let i = 0; i < str.length; i++) {
      if (letters.indexOf(str[i]) !== -1) {
        // remove letter from letters
        letters = letters.replace(str[i], "")
      }
    }
    return letters.length === 0
  }
}

// keep this function call here
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]))
