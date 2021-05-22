console.log("z".charCodeAt(0))
let num = 65;
console.log(String.fromCharCode(num))
console.log(String.fromCodePoint(65, 122))
// 127 to 160 blanks



// for(newarr in arr){

//     if(num !== lastNum){
//         push
//         console.log(newarr)
//     }
// }

var start = 65;
var end = 122;
// var arr = [];
for (let i = start; i< end; i++){
    // if(i === 90 ){
    //     i = 97; //a
    // skip 91 to 96
    // let arr = String.fromCharCode(i).split();

     let arr = [String.fromCharCode(i)];
        console.log(arr);

    // }
}


