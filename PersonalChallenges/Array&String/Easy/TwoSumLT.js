// we can compare the number of the target to the index value and check if the value
// left over after subtraction is in the array so if we have 9 as the target we
// subtract 9 from 2 which is 7 then check if seven exist in the array if not move
// to next index then substact and check again

// Good Approach for space but not runtime
const MyHashTable = require('../../DataStructures/MyBuiltHashTable');


let Mynum = [2, 7, 11, 15];
let Mytarget = 9;

// const twoSum =(nums, target) =>{

//     console.log(nums)

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== target ){
//             console.log(nums[i] + nums[i +1] == target)
//             console.log(nums[i])
//           }

//     }

// }

// Mynum[i] + Mynum[i +1] == Mytarget

//   else if (nums[i] !== target){
// }



// const twoSum = function (nums, target) {
//   const comp = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (comp[nums[i]] >= 0) {
//         // then on second run updated

//       return [comp[nums[i]], i];

//     }

// (comp[target - nums[i]] = i) //value is changed here
//   }
// };

// console.log(twoSum(Mynum, Mytarget));
const myTB = new MyHashTable();


const twoSumHash = function (nums, target) {
  myTB.set("gdf", 2);
  console.log(myTB.buckets)  
  console.log(myTB.get("gdf"))  


};

// twoSumHash(Mynum, Mytarget);


// O(n) - One-pass Hash Table
var twoSum = function(nums, target) {
  let map = new Map; // used for fast lookup
  // key and value in Map can be in any data type, not limited to only string or integer.
  for (var i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      // has checks if key is in map you can delete and clear and gt size
      if (map.has(complement)) {
          return [map.get(complement), i]
      }
      map.set(nums[i], i);
  }
}

console.log(twoSum(Mynum,Mytarget));

//ways to itrate map 

var map = new Map(); //Empty Map
var map = new Map([[1,2],[2,3]]); // map = {1=>2, 2=>3}


// for (const item of map){
//   console.log(item); 
// }
 //Or
// for (const [key,value] of map){
//   console.log(`key: ${key}, value: ${value}`);
 
// }

// map.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));

