// / console.log(node);// full list
// console.log(node.next);// pointer
// // console.log(node.val); // given node
// // console.log(node.next.val); // node after 5
// console.log(node.next.next);// next node
const LinkedList = require("../../../PersonalChallenges/DataStructures/Linkedlist");

const myLK = new LinkedList();

let head = [1, 2, 6, 3, 4, 5, 6];
let val = 6;

const removeElements = (head, val) => {
  console.log(head);
  console.log(val);

  let numbers = new Set();
  for (let num of nums) {
    if (!numbers.has(num)) {
      // adding numbers not in set from given array
      console.log(numbers.add(num));
    } else {
      return true;
    }
  }
  return false;
  
};

removeElements(head, val);
