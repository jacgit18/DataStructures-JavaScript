"use strict";

var SimpArray = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]; // nested array is basicallly  a multi dimensional array
// console.log(TheArray);

var LeftToRight = 0;
var RightToLeft = 0;
var rows = SimpArray.length;
var col = SimpArray[0].length;
var i = 0;
var j = 0;
var k = 0;
var l = SimpArray.length - 1;

while (i < rows && j < col && k < rows && l >= 0) {
  LeftToRight += SimpArray[i][j];
  RightToLeft += SimpArray[k][l];
  i++;
  j++;
  k++;
  l--;
}

console.log(Math.abs(LeftToRight - RightToLeft));