
let theNum = [1,2,3,1];

// stacks & queues

const containsDuplicate = (nums) => {
    // console.log(nums)
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == nums[i+1]){
            // return true;
            console.log("HI")

        }
        else if(nums[i] !== nums[i+1]){
            // return false;
            console.log("The")
        }
    }


}

containsDuplicate (theNum);


// let first = 0;
//     let last = nums.length - 1;
//     while(first < last) {
//         if(nums[first] === nums[last]){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }