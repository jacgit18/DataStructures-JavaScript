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

ListFiller();
var head = myLK.head;
var val = 6;

var removeElements = function removeElements(head, val) {
  console.log(head);
  console.log(val);
  var numbers = new Set();

  for (var num in head) {
    if (!numbers.has(num)) {
      // adding numbers not in set from given array
      console.log(myLK.removeAtIndex(numbers.add(num)));
    } else {
      return true;
    }
  }

  return false;
};

removeElements(head, val);
myLK.print();