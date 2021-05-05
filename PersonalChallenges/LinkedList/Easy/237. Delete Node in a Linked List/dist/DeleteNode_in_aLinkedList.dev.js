"use strict";

var LinkedList = require('../../../DataStructures/Linkedlist');

var myLK = new LinkedList();

var ListFiller = function ListFiller() {
  myLK.clearList();
  myLK.insertFirst(9);
  myLK.insertFirst(1);
  myLK.insertFirst(5);
  myLK.insertFirst(4); // myLK.printListData();
};

ListFiller(); // //   head = [4,5,1,9], node = 5

console.log("");
console.log(myLK); // const deleteNode = (TheNewList) => {
// TheNewList.val = TheNewList.next.val;
// console.log(theNewList.val)
// }
// deleteNode(myLK);

var deleteNode = function deleteNode(node) {
  // console.log(node);// full list
  console.log(node.next); // pointer
  // console.log(node.val); // given node
  // console.log(node.next.val); // node after 5

  console.log(node.next.next); // next node

  node.val = node.next.val;
  node.next = node.next.next;
};