//conventional way
var arr= [1,2,3,4,5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] * arr[i]);
}

//with forEach
 arr.forEach(function(val, index, theArray){
    theArray[index] = val * val
})
console.log(arr)
//with map, but naw take the last array, modified

var newArray = arr.map((val) => {
    return val * val;
})
console.log(newArray)
