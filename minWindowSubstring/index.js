function MinWindowSubstring(strArr) {
  //Get unique and repited charts of K in a hash table
  let N = strArr[0]
  let K = strArr[1]
  let minSubstring = null

  for (let i = (K.length = 0); i < N.length; i++) {
    for (let j = 0; j < N.length - i; j++) {
      let substring = N.substr(j, i)
      if (isSubstring(substring)) {
        return substring
      }
    }
  }
  return "Is not substring"

  function isSubstring(substring) {
    let arr = substring.split("")
    for (let i = 0; i < K.length; i++) {
      let aux = arr.findIndex((val) => val === K[i])
      if (aux === -1) {
        return false
      } else {
        arr.splice(aux, 1)
      }
    }
    return true
  }
}
//Input: ["aaffhkksemckelloe", "fhea"]
//Output: affhkkse
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]))
