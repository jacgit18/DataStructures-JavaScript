"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Construct Single Node
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
}; // Create/Get/Remove Nodes From Linked List


var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.size = 0;
  } // Insert first node


  _createClass(LinkedList, [{
    key: "insertFirst",
    value: function insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    } // Insert last node

  }, {
    key: "insertLast",
    value: function insertLast(data) {
      var node = new Node(data);
      var current; // If empty, make head

      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
      }

      this.size++;
    } // Insert at index

  }, {
    key: "insertAt",
    value: function insertAt(data, index) {
      //  If index is out of range
      if (index > 0 && index > this.size) {
        return;
      } // If first index


      if (index === 0) {
        this.insertFirst(data);
        return;
      }

      var node = new Node(data);
      var current, previous; // Set current to first

      current = this.head;
      var count = 0;

      while (count < index) {
        previous = current; // Node before index

        count++;
        current = current.next; // Node after index
      }

      node.next = current;
      previous.next = node;
      this.size++;
    } // Get at index

  }, {
    key: "getAt",
    value: function getAt(index) {
      var current = this.head;
      var count = 0;

      while (current) {
        if (count == index) {
          console.log(current.data);
        }

        count++;
        current = current.next;
      }

      return null;
    } // Remove at index

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }

      var current = this.head;
      var previous;
      var count = 0; // Remove first

      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.size--;
    } // Clear list

  }, {
    key: "clearList",
    value: function clearList() {
      this.head = null;
      this.size = 0;
    } // Print list data

  }, {
    key: "printListData",
    value: function printListData() {
      var current = this.head;

      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }]);

  return LinkedList;
}();

module.exports = LinkedList; // older export way

var ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 3); // ll.clearList();
// ll.getAt(2);

ll.printListData();
ll.removeAt(300);
ll.printListData();
console.log(ll);