"use strict";

// / console.log(node);// full list
// console.log(node.next);// pointer
// // console.log(node.val); // given node
// // console.log(node.next.val); // node after 5
// console.log(node.next.next);// next node
var LinkedList = require("../../../PersonalChallenges/DataStructures/Linkedlist");

var myLK = new LinkedList();
var head = [1, 2, 6, 3, 4, 5, 6];
var val = 6;

var removeElements = function removeElements(head, val) {
  console.log(head);
  console.log(val);
  var numbers = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      if (!numbers.has(num)) {
        // adding numbers not in set from given array
        console.log(numbers.add(num));
      } else {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

removeElements(head, val);