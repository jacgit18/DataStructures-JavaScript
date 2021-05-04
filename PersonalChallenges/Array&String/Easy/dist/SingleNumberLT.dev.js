"use strict";

var SimpNum = [2, 2, 1];
var SimpNum2 = [4, 1, 2, 1, 2];
var SimpNum3 = [1]; // use hashset

var singleNumber = function singleNumber(nums) {
  var hashTableObj = {}; // for of use an iterable like an array and doesnt work with objects

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      hashTableObj[num] = hashTableObj[num] + 1 || 1;
    } // for in focus on the index or property names of a object so the key or index for arrays of the key value pair

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

  for (var key in hashTableObj) {
    if (hashTableObj[key] === 1) {
      console.log(key);
    }
  } // second attempt //////////////////////////
  // let currentposition = 0;
  // let numbers = new Set();
  //     for (let num of nums){
  //         if (!numbers.has(num)){
  //             numbers.add(num);
  //             console.log(numbers)
  //         }
  //         else if(numbers.has(num)){
  //             numbers.delete(num);
  //             console.log(numbers)    
  //             }
  // }
  // First attempt //////////////////////////
  // for (currentposition; currentposition < nums.length; currentposition++ ){
  //     if (num[currentposition] !== numbers[currentposition + 1] ){
  //         console.log(nums[currentposition]);
  //     }
  // }

};

singleNumber(SimpNum); // console.log("");

singleNumber(SimpNum2); // console.log("");

singleNumber(SimpNum3);