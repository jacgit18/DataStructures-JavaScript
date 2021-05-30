"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Binary Search Tree */
var Node = function Node(data) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.left = left;
  this.right = right;
};

var BT =
/*#__PURE__*/
function () {
  function BT() {
    _classCallCheck(this, BT);

    this.root = null;
  }

  _createClass(BT, [{
    key: "add",
    value: function add(data) {
      var node = this.root;

      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        var searchTree = function searchTree(node) {
          if (data <= node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data >= node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };

        return searchTree(node);
      }
    }
  }, {
    key: "findMin",
    value: function findMin() {
      var current = this.root;

      while (current.left !== null) {
        current = current.left;
      }

      return current.data;
    }
  }, {
    key: "findMax",
    value: function findMax() {
      var current = this.root;

      while (current.right !== null) {
        current = current.right;
      }

      return current.data;
    }
  }, {
    key: "find",
    value: function find(data) {
      var current = this.root;

      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }

        if (current === null) {
          return null;
        }
      }

      return current;
    }
  }, {
    key: "isPresent",
    value: function isPresent(data) {
      var current = this.root;

      while (current) {
        if (data === current.data) {
          return true;
        }

        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return false;
    }
  }, {
    key: "remove",
    value: function remove(data) {
      var removeNode = function removeNode(node, data) {
        if (node == null) {
          return null;
        }

        if (data == node.data) {
          // node has no children 
          if (node.left == null && node.right == null) {
            return null;
          } // node has no left child 


          if (node.left == null) {
            return node.right;
          } // node has no right child 


          if (node.right == null) {
            return node.left;
          } // node has two children 


          var tempNode = node.right;

          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }

          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      };

      this.root = removeNode(this.root, data);
    }
  }, {
    key: "isBalanced",
    value: function isBalanced() {
      return this.findMinHeight() >= this.findMaxHeight() - 1;
    }
  }, {
    key: "findMinHeight",
    value: function findMinHeight() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      if (node == null) {
        return -1;
      }

      ;
      var left = this.findMinHeight(node.left);
      var right = this.findMinHeight(node.right);

      if (left < right) {
        return left + 1;
      } else {
        return right + 1;
      }

      ;
    }
  }, {
    key: "findMaxHeight",
    value: function findMaxHeight() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      if (node == null) {
        return -1;
      }

      ;
      var left = this.findMaxHeight(node.left);
      var right = this.findMaxHeight(node.right);

      if (left > right) {
        return left + 1;
      } else {
        return right + 1;
      }

      ;
    }
  }, {
    key: "inOrder",
    value: function inOrder() {
      if (this.root == null) {
        return null;
      } else {
        var traverseInOrder = function traverseInOrder(node) {
          node.left && traverseInOrder(node.left);
          result.push(node.data);
          node.right && traverseInOrder(node.right);
        };

        var result = new Array();
        traverseInOrder(this.root);
        return result;
      }

      ;
    }
  }, {
    key: "preOrder",
    value: function preOrder() {
      if (this.root == null) {
        return null;
      } else {
        var traversePreOrder = function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };

        var result = new Array();
        ;
        traversePreOrder(this.root);
        return result;
      }

      ;
    }
  }, {
    key: "postOrder",
    value: function postOrder() {
      if (this.root == null) {
        return null;
      } else {
        var traversePostOrder = function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };

        var result = new Array();
        ;
        traversePostOrder(this.root);
        return result;
      }
    }
  }, {
    key: "levelOrder",
    value: function levelOrder() {
      var result = [];
      var Q = [];

      if (this.root != null) {
        Q.push(this.root);

        while (Q.length > 0) {
          var node = Q.shift();
          result.push(node.data);

          if (node.left != null) {
            Q.push(node.left);
          }

          ;

          if (node.right != null) {
            Q.push(node.right);
          }

          ;
        }

        ;
        return result;
      } else {
        return null;
      }

      ;
    }
  }]);

  return BT;
}();

module.exports = BT;