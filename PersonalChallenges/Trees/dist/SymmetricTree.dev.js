"use strict";

// let treeMirror = [1,2,2,3,4,4,3];
// comparing pairs of subtrees
var BT = require("../../PersonalChallenges/DataStructures/BinaryTree");

var BinarySearchTree = require("../../PersonalChallenges/DataStructures/BinarySearchTree");

var myBT = new BT();
var myBST = new BinarySearchTree();

var isSymmetric = function isSymmetric(root) {
  console.log(root);
}; // console.log(isSymmetric([1,2,2,3,4,4,3]));
// isSymmetric([1,2,2,3,4,4,3]);
// isSymmetric([1,2,2,null,3,null,3]);


myBT.add(1);
myBT.add(2);
myBT.add(2);
myBT.add(3);
myBT.add(4);
myBT.add(4);
myBT.add(3);
console.log(myBT.isBalanced());
console.log(myBT.inOrder());
console.log(myBT); // myBST.insert(1);
// myBST.insert(2);
// myBST.insert(2);
// myBST.insert(3);
// myBST.insert(4);
// myBST.insert(4);
// myBST.insert(3);
// console.log(myBST.root.right)
// var isSymmetric = function(root) {
//     if(root == null){
//         return true;
//     }
//     return isMirror(root.left, root.right)
// };
// let isMirror = (subtreeOne, subtreeTwo) =>{
//     if (subtreeOne === null || subtreeTwo === null) {
//         return subtreeOne === subtreeTwo;
//     }
//     if (subtreeOne.val !== subtreeTwo.val) {
//         return false;
//     }
//     return isMirror(subtreeOne.left, subtreeTwo.right) && isMirror(subtreeOne.right, subtreeTwo.left);
// }