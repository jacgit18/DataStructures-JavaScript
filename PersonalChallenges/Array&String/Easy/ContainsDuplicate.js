let theNum = [1, 2, 3, 1];

// hashtables

const containsDuplicate = (nums) => {

let numbers = new Set();
for (let num of  nums){
        if (!numbers.has(num)){
            // adding numbers not in set from given array
            console.log(numbers.add(num))
    
        }
        else {
            return true;
        }

}
return false;
}

containsDuplicate(theNum);

// console.log(nums)
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] == nums[i+1]){
//          return true;
//         console.log("HI")

//     }
//     else if(nums[i] !== nums[i+1]){
//          return false;
//         console.log("The")
//     }
// }


    // doesnt pass all test cases
    // let first = 0;
    // let last = nums.length - 1;
    // while (first < last) {
    //   if (nums[first] === nums[last]) {
    //     return console.log(nums[first] === nums[last]);
    //   } else {
    //     return console.log(nums[first] === nums[last]);
    //   }

    