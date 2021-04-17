"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyHashTable =
/*#__PURE__*/
function () {
  function MyHashTable() {
    var initialCapacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

    _classCallCheck(this, MyHashTable);

    this.buckets = new Array(initialCapacity);
    this.collisions = 0;
  }

  _createClass(MyHashTable, [{
    key: "set",
    value: function set(key, value) {
      var bucketIndex = this.getIndex(key);

      if (this.buckets[bucketIndex]) {
        this.buckets[bucketIndex].push({
          key: key,
          value: value
        });

        if (this.buckets[bucketIndex].length > 1) {
          this.collisions++;
        }
      } else {
        this.buckets[bucketIndex] = [{
          key: key,
          value: value
        }];
      }

      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      var bucketIndex = this.getIndex(key);

      for (var arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
        var entry = this.buckets[bucketIndex][arrayIndex];

        if (entry.key === key) {
          return entry.value;
        }
      }
    }
  }, {
    key: "hash",
    value: function hash(key) {
      var hashValue = 0;
      var stringTypeKey = "".concat(key).concat(_typeof(key));

      for (var index = 0; index < stringTypeKey.length; index++) {
        var charCode = stringTypeKey.charCodeAt(index);
        hashValue += charCode << index * 8;
      }

      return hashValue;
    }
  }, {
    key: "getIndex",
    value: function getIndex(key) {
      var indexHash = this.hash(key);
      var index = indexHash % this.buckets.length;
      return index;
    }
  }]);

  return MyHashTable;
}();

module.exports = MyHashTable; // older export way
//   //create object of type hash table
//   const ht = new HashTable();