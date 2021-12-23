//Learnings: For loop, Objects/hash tables/diccionarios, forEach.

/**The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S. 
 * For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
 *  your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
* */

function twoSum(arr, S) {
   let peers = [];
   let hashTable = {};

   for (let i = 0; i < arr.length; i++) {
       let peer = S - arr[i];

       //chequear si el numero existe en la hashTable ,
       // y si si existe entonces encontramos un pareja
       if(hashTable[peer.toString()] !== undefined){
           peers.push([arr[i], peer]);
       }
       hashTable[arr[i].toString()] = arr[i];
    
   }
   return peers;
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7))