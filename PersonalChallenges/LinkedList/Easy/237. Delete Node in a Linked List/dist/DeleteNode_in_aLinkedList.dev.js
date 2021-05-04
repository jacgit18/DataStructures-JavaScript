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