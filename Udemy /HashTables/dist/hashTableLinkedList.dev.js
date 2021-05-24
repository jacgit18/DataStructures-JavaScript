"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// code pen url: https://codepen.io/jaspercreel/pen/RgXjEp
// Declaring a node and list class outside of the hash class avoids binding issues with this
// The node class should only be created with a key value pair
var Node = function Node(key, value) {
  _classCallCheck(this, Node);

  this[key] = value;
  this.next = null;
}; // The list class will take a node as an argument to start the chain


var List = function List(node) {
  _classCallCheck(this, List);

  this.head = node;
  this.count = 0;
};

var HashTable =
/*#__PURE__*/
function () {
  function HashTable(limit) {
    _classCallCheck(this, HashTable);

    this.storage = [];
    this.limit = limit || 50; // I wanted to start with a base limit of 50, but will add a doubler function later that expands it when necessary. To avoid collisions more, make this larger

    this.count = 0;
  } // The hashing function uses string charcode values to create a unique hash. This is why primary keys being unique are important


  _createClass(HashTable, [{
    key: "makeHash",
    value: function makeHash(str) {
      var hash = 0;
      var limit = this.limit;
      var letter;

      for (var i = 0; i < str.length; i++) {
        letter = str[i];
        hash = (hash << 5) + letter.charCodeAt(0);
        hash = (hash & hash) % limit;
      }

      return hash;
    } // insert is the simplest function and will always create a new bucket with a list or add a node to a list unless a JS error occurs

  }, {
    key: "insert",
    value: function insert(key, value) {
      var index = this.makeHash(key);
      var bucket = this.storage[index];
      var item = new Node(key, value); // Create a new bucket if none exist

      if (!bucket) {
        bucket = new List(item);
        this.storage[index] = bucket;
        bucket.count++;
        this.count++;
        return 'New bucket created';
      } else {
        var current = bucket.head; // If the head has null next it is there is only one node in the list

        if (!current.next) {
          current.next = item;
        } else {
          // move to the end of the list
          while (current.next) {
            current = current.next;
          }

          current.next = item;
        }

        bucket.count++;
        this.count++;
        return 'New item placed in bucket at position ' + bucket.count;
      }
    } // Updating at a specific node is currently not working??????

  }, {
    key: "update",
    value: function update(key, value, i) {
      var pos = i || null; // position variables don't have to be passed in, and most often won't

      var index = this.makeHash(key);
      var bucket = this.storage[index];
      var item = new Node(key, value);

      if (!bucket) {
        bucket = new List(item);
        this.storage[index] = bucket;
        bucket.count++;
        this.count++;
        return 'New Bucket created';
      } else if (i >= bucket.count) {
        return 'Update position is greater than bucket list length'; // We don't want nodes to be greater than the actual data in the list
      } else {
        var current = bucket.head; // Update the head node

        if (!i || i === 1) {
          current[key] = value;
        } else {
          var n = 1; // This while will never go past the last node

          while (n < pos) {
            current = current.next;
            n++;
          }

          current[key] = value;
          return 'Item updated at position ' + pos;
        }
      }
    }
  }, {
    key: "retrieve",
    value: function retrieve(key, i) {
      var pos = i || null;
      var index = this.makeHash(key);
      var bucket = this.storage[index];

      if (!bucket) {
        return 'Item not found';
      }

      if (pos > bucket.count) {
        return 'Retrieval position is greater than bucket length';
      }

      if (!i || i === 1) {
        return bucket.head[key]; // Return the value only, can be modified
      }

      var n = 1;
      var current = bucket.head;

      while (n < pos) {
        current = current.next;
        n++;
      }

      return current[key];
    } // Removing nodes is a little tricky. The node is not actually removed but skipped over by either moving the head or changing the previous node's next value to the node after the current one. Removing buckets is easy, just splice.

  }, {
    key: "remove",
    value: function remove(key, i) {
      var pos = i || null;
      var index = this.makeHash(key);
      var bucket = this.storage[index];

      if (!bucket) {
        return 'Bucket not found';
      }

      if (pos < bucket.count) {
        return 'Position argument is longer than length of bucket';
      }

      var current = bucket.head;
      var previous;

      if (!pos || pos === 1) {
        // Completely splice the bucket if it will have no nodes
        if (bucket.count === 1) {
          this.storage.splice(index, 1);
          this.count--;
          return 'Hash table spliced at hash index';
        } // Shift the head one node forward


        bucket.head = current.next;
        bucket.count--;
        this.count--;
        return 'Linked list head repositioned';
      }

      var n = 1;

      while (n < pos) {
        previous = current;
        current = current.next;
        n++;
      } // Shift the previous node's next value one node further


      previous.next = current.next;
      bucket.count--;
      this.count--;
      return 'Linked list item removed at position ' + pos;
    }
  }]);

  return HashTable;
}();
/* Examples

var hash = new HashTable();

hash.insert('James Hamann', 30); // Will create a bucket at hash.storage[9] and insert list with node of key, value
hash.insert('James Hamann', 35); // Will insert new node onto list at same bucket with new key value pair

console.log(hash.retrieve('James Hamann')); // Should value at first node in the bucket (30)
*/