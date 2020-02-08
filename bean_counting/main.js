let countBs = (str) => {
    const letter = 'B';
    let acc = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] === letter){
          acc++;
      }
    }
    return acc;
  }
  let countChar = (str, letter) => {
      let acc = 0;
      for(i = 0; i < str.length; i++){
        if(str[i] === letter){
            acc++;
        }
      }
    return acc;
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4