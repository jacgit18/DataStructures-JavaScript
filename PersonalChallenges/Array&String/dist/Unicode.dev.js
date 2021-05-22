"use strict";

console.log("z".charCodeAt(0));
var num = 65;
console.log(String.fromCharCode(num));
console.log(String.fromCodePoint(65, 122)); // for(newarr in arr){
//     if(num !== lastNum){
//         push
//         console.log(newarr)
//     }
// }

var start = 65;
var end = 122; // var arr = [];

for (var i = start; i < end; i++) {
  // if(i === 90 ){
  //     i = 97; //a
  // skip 91 to 96
  // let arr = String.fromCharCode(i).split();
  var arr = [String.fromCharCode(i)];
  console.log(arr); // }
}