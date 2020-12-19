/*two strings are anagrams if ...*/
function funWithAnagrams(textArr) {
  // Write your code here
  for(let i = 0; i < textArr.length; i++){
      for(let j = i + 1; j < textArr.length; j++){
          if (isAnagram(textArr[i], textArr[j])) {
              textArr.splice(j,1)
              j--
          }
      }
  }
  
  return textArr.sort()
}

function isAnagram(s1, s2) {
  if(s1.length !== s2.length){
      return false
  }
  
  for(let i = 0; i < s1.length; i++) {
     if(s2.includes(s1[i])){
         s2 = s2.replace(s1[i], "")
     }
  }
  
  return s2.length === 0
}