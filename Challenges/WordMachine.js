// You are given a list of strings ops where each element is either:

// A non-negative integer that should be pushed into a stack
// "POP" meaning pop the top element in the stack
// "DUP" meaning duplicate the top element in the stack
// "+" meaning pop the top two and push the sum
// "-" meaning pop the top two and push top - second
// Return the top element in the stack after applying
//  all operations. If there are any invalid operations, return -1.


ops = ["1", "5", "DUP", "3", "-"]

// ops.forEach((k) => {
//     console.log(k);



// })

for(let i = 0; i < ops.length; i++){
    if(ops[i] == 5 || ops[i] == 3){
     let newval = parseInt(ops[i] + ops[i]);
     ops.pop(newval);
     console.log(i);

    }

}
