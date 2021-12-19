function StringScramble(str1,str2) { 
    const arr2 = str2.split('');
  
    for (let i = 0; i < str1.length; i++) {
      const letterIdx = arr2.findIndex(letter => letter === str1[i])
  
      if (letterIdx === -1) {
        return 'false'
      }
  
      arr2.splice(letterIdx , 1)
    }
    
    return arr2.length === 0 ? 'true' : 'false'; 
  }
     
  // keep this function call here 
  console.log(StringScramble(readline()));