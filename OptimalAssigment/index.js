function OptimalAssignments(strArr) { 
    const N = strArr.length;
  
    const matrix = strArr.map(str => str.replace(/[\(\)]/g, '').split(',').map(item => Number(item)));
  
    const result = [];
    const usedMachines = [];
  
    for (let task = 0; task < N; task++) {
      let min = Infinity;
      let minIdx;
      for (let machine = N-1; machine >= 0; machine--) {
        if (matrix[machine][task] < min && !usedMachines.includes(machine)) {
          min = matrix[machine][task];
          minIdx = machine;
        }
      }
  
      result.push([minIdx + 1, task + 1]);
      usedMachines.push(minIdx);
    }
     
    return result.sort((a, b) => a[0] - b[0]).map(item => `(${item[0]}-${item[1]})`).join(''); 
  
  }
     
  // keep this function call here 
  console.log(OptimalAssignments(readline()));