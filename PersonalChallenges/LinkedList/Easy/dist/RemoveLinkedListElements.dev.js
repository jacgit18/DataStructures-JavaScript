"use strict";

// / console.log(node);// full list
// console.log(node.next);// pointer
// // console.log(node.val); // given node
// // console.log(node.next.val); // node after 5
// console.log(node.next.next);// next node
var LinkedList = require("../../../PersonalChallenges/DataStructures/Linkedlist");

var myLK = new LinkedList();

var ListFiller = function ListFiller() {
  myLK.insertAtHead(6);
  myLK.insertAtHead(5);
  myLK.insertAtHead(4);
  myLK.insertAtHead(3);
  myLK.insertAtHead(6);
  myLK.insertAtHead(2);
  myLK.insertAtHead(1);
  myLK.print();
};

var head = myLK.head;
var val = 6; // const removeElements = (head, val) => {
//   console.log(head);
//   console.log(val);
//   let numbers = new Set();
//   for (let num in head) {
//     if (!numbers.has(num)) {
//       // adding numbers not in set from given array
//       console.log(myLK.removeAtIndex(numbers.add(num)));
//     } else {
//       return true;
//     }
//   }
//   return false;
// };
// removeElements(head, val);
// myLK.print();

var removeDuplicateElements = function removeDuplicateElements(head, val) {
  if (head === null) {
    return null;
  }

  var currentNode = LinkedList(-1);
  console.log(currentNode);
  currentNode.next = head;
  head = currentNode;

  while (currentNode.next !== null) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head.next;
};

removeDuplicateElements(head, val);