"use strict";

var LinkedList = require("../../DataStructures/Linkedlist");

var myLK = new LinkedList();

var ListFiller = function ListFiller() {
  myLK.insertAtHead(9);
  myLK.insertAtHead(1);
  myLK.insertAtHead(5);
  myLK.insertAtHead(4); // console.log(myLK.head); // full list
  // console.log(myLK.head.value); // just 4 for no list
  // console.log(myLK.head.next.value); // return 5
  // console.log(myLK.head.next.next.value); // return 1
  // console.log(myLK.head.next.next.next.value); // return 9
  // console.log(myLK.head.next.next.next); // return 9
  // console.log(myLK.head.next.next.next.next); // return null

  myLK.print();
  myLK.removeAtIndex(1);
  myLK.print();
};

ListFiller(); // //   head = [4,5,1,9],

var node = myLK.head.next.value; // store 5 position

var deleteNode = function deleteNode(node) {
  node = myLK.head.next.next.value; // change 5 to 1
  // console.log(myLK.head.next); // show value after head

  myLK.head.next = myLK.head.next.next; // move pointer

  myLK.print(); // console.log(node);// full list
  //   console.log(node.next); // pointer
  // console.log(node.val); // given node
  // console.log(node.next.val); // node after 5
  //   console.log(node.next.next); // next node
  //   node.val = node.next.val;
  //   node.next = node.next.next;
}; // deleteNode(node);


var age = 0;
var test = prompt('enter something');
console.log(test);