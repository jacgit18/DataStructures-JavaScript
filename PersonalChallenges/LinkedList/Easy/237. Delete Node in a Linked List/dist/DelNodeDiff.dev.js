"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node =
/**
 * 
 * @param {*} data 
 * @param {*} next 
 */
function Node(data) {
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList(data) {
    _classCallCheck(this, LinkedList);

    this.head = {
      data: data,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  _createClass(LinkedList, [{
    key: "append",
    value: function append(data) {
      var newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }, {
    key: "insertFirst",
    value: function insertFirst(data) {
      this.head = new Node(data);
      this.size++;
    }
  }, {
    key: "prepend",
    value: function prepend(data) {
      var newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }, {
    key: "insert",
    value: function insert(index, data) {
      //Check for proper parameters;
      if (index >= this.length) {
        console.log('yes');
        return this.append(data);
      }

      var newNode = new Node(data);
      var leader = this.traverseToIndex(index - 1);
      var holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
  }, {
    key: "traverseToIndex",
    value: function traverseToIndex(index) {
      //Check parameters
      var counter = 0;
      var currentNode = this.head;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }

      return currentNode;
    }
  }, {
    key: "deleteNode",
    value: function deleteNode(index) {
      // Check Parameters      
      var leader = this.traverseToIndex(index - 1);
      var unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }, {
    key: "printListData",
    value: function printListData() {
      var current = this.head;

      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } // Clear list

  }, {
    key: "clearList",
    value: function clearList() {
      this.head = null;
      this.length = 0;
    } //   insertFirst(data) {
    //   this.head = new Node(data, this.head);
    //   this.size++;
    // }

  }]);

  return LinkedList;
}();

var myLK = new LinkedList(); // myLK.clearList();

myLK.printListData();
myLK.append(9);
myLK.append(1);
myLK.append(5);
myLK.append(4);
console.log("");
myLK.printListData(); // myLK.deleteNode(5);

console.log("");
myLK.printListData();
console.log("");
console.log(myLK);