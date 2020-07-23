
function range(start, end) {
  var result = [], cnt = start;
  while(cnt <= end) {
    result.push(cnt);
    cnt++; 
  }
  return result;
}

function sum(arr) {
  var total = 0;

  while(arr.length > 0) {
    total = total + arr.pop();
  }
  return total;
}
function sum2(arr) {
  total = 0;
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i];
  }
  return total;
}   
console.log(sum2(range(2,3))) 
//console.log(sum(range(2,3))) 
var range2 = function (start, end) {
  var arr = [], cnt = start;
  function increaseCnt() {
    if(cnt >= end) {
      return arr.push(end);
    } else {
      arr.push(cnt);
      increaseCnt(++cnt);
    }
  };
  increaseCnt(cnt);
  return arr;
};
