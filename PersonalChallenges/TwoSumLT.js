// we can compare the number of the target to the index value and check if the value
// left over after subtraction is in the array so if we have 9 as the target we
// subtract 9 from 2 which is 7 then check if seven exist in the array if not move
// to next index then substact and check again

// Good Approach for space but not runtime

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

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
        // then on second run updated

      return [comp[nums[i]], i];

    }

(comp[target - nums[i]] = i) //value is changed here
  }
};

console.log(twoSum(Mynum, Mytarget));