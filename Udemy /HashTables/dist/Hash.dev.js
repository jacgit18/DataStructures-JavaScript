"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//You could potentially have functions as keys and a value that is also a function or perhaps a number
// Now in Javascript in an object like this if you pass a key that is a number or a function it actually
// gets stringify you find and it only allows string keys but with the new version of javascript and E6
// you actually have something called Map and sets.
// Which also may be familiar in other languages.
// The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
// A map is created like this.
var myMap = new Map(); // And the difference between a map and an object is the fact that a map allows you to save any data type as the key.
// so you can have a function as a key also objects have no order
//  another benefit of map is that it maintains insertion order.
// Hashmap is a type of hashtable

var mySet = new Set(); // stores the keys

console.log(myMap.set("grapes", 1000));
console.log(myMap.get("grapes"));

var HashTable =
/*#__PURE__*/
function () {
  function HashTable(size) {
    _classCallCheck(this, HashTable);

    this.data = new Array(size); // this.data = [];
  } // hash function allocates were key is in memory


  _createClass(HashTable, [{
    key: "_hash",
    value: function _hash(key) {
      var hash = 0;

      for (var i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }

      return hash;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var address = this._hash(key);

      if (!this.data[address]) {
        this.data[address] = [];
      }

      this.data[address].push([key, value]);
      return this.data;
    }
  }, {
    key: "get",
    value: function get(key) {
      var address = this._hash(key);

      var currentBucket = this.data[address];

      if (currentBucket) {
        for (var i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1];
          }
        }
      }

      return undefined;
    } //   keys(){
    //     const keysArray = [];
    //     console.log(this.data.length);
    //     for (let i = 0; i < this.data.length; i++){
    //       if(this.data[i]){
    //         keysArray.push(this.data[i][0][0])
    //       }
    //     }
    //     return keysArray; // will be unordered
    //   }
    // collision version

  }, {
    key: "keys",
    value: function keys() {
      if (!this.data.length) {
        return undefined;
      }

      var result = []; // loop through all the elements

      for (var i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (var j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0]);
            }
          } else {
            result.push(this.data[i][0]);
          }
        }
      }

      return result;
    }
  }]);

  return HashTable;
}(); // passing 25 to constructor with array 


var myHashTable = new HashTable(25);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("pear", 4));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys()); // with hashtable you have loop through unsorted memory