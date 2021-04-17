"use strict";

var theNum = [1, 2, 3, 1]; // hashtables

var containsDuplicate = function containsDuplicate(nums) {
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

containsDuplicate(theNum); // console.log(nums)
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] == nums[i+1]){
//          return true;
//         console.log("HI")
//     }
//     else if(nums[i] !== nums[i+1]){
//          return false;
//         console.log("The")
//     }
// }
// doesnt pass all test cases
// let first = 0;
// let last = nums.length - 1;
// while (first < last) {
//   if (nums[first] === nums[last]) {
//     return console.log(nums[first] === nums[last]);
//   } else {
//     return console.log(nums[first] === nums[last]);
//   }