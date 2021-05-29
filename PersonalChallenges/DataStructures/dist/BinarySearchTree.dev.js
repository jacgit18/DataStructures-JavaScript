"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.left = null;
  this.right = null;
  this.value = value;
};

var BinarySearchTree =
/*#__PURE__*/
function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.root = null;
  }

  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(value) {
      var newNode = new Node(value);

      if (this.root === null) {
        this.root = newNode;
      } else {
        var currentNode = this.root;

        while (true) {
          if (value < currentNode.value) {
            //Left
            if (!currentNode.left) {
              currentNode.left = newNode;
              return console.log(this); // return this;
            }

            currentNode = currentNode.left;
          } else {
            //Right
            if (!currentNode.right) {
              currentNode.right = newNode;
              return console.log(this); // return this;
            }

            currentNode = currentNode.right;
          }
        }
      }
    }
  }, {
    key: "lookup",
    value: function lookup(value) {
      if (!this.root) {
        return false;
      }

      var currentNode = this.root; // where iterating using divide and conquer

      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return console.log(currentNode); // return currentNode;
        }
      }

      return console.log(null); // return null
    }
  }, {
    key: "remove",
    value: function remove(value) {
      if (!this.root) {
        return false;
      }

      var currentNode = this.root;
      var parentNode = null;

      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left; //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            } //Option 2: Right child which doesnt have a left child

          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;

            if (parentNode === null) {
              this.root = currentNode.right;
            } else {
              //if parent > current, make right child of the left the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right; //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            } //Option 3: Right child that has a left child

          } else {
            //find the Right child's left most child
            var leftmost = currentNode.right.left;
            var leftmostParent = currentNode.right;

            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            } //Parent's left subtree is now leftmost's right subtree


            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;

            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }

          return true;
        }
      }
    }
  }]);

  return BinarySearchTree;
}();

module.exports = BinarySearchTree; // const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// console.log("--------------")
// console.log("Remove")
// tree.remove(170)
// // JSON.stringify(traverse(tree.root))
// console.log("--------------")
// console.log("Traversal")
// tree.lookup(15);
// tree.lookup(7);
// tree.lookup(20);
// tree.lookup(170);
// //     9
// //  4     20
// //1  6  15  170
// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }