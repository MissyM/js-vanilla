/**
 To rotate by one, store arr[0] in a temporary variable temp,
 move arr[1] to arr[0], arr[2] to arr[1] …and finally temp to arr[n-1]
Let us take the same example arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2 
Rotate arr[] by one 2 times 
We get [2, 3, 4, 5, 6, 7, 1] after first rotation and [ 3, 4, 5, 6, 7, 1, 2]
after second rotation.
 */
function leftRotate(arr, d, n) {
  for(let i = 0; i < d; i++) {
   leftRotationByOne(arr, n);
  }
  return arr
}
function leftRotationByOne(arr, n) {
  let i, temp;
  temp = arr[0];
  for (i = 0; i < n-1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n-1] = temp;
}



console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 2, 7))