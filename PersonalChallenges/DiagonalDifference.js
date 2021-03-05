
let SimpArray = [ 
    [3], 
    [ 11, 2, 4 ], 
    [ 4, 5, 6 ], 
    [ 10, 8, -12 ] 
]

// nested array is basicallly  a multi dimensional array


// console.log(TheArray);
let LeftToRight = 0;
let RightToLeft = 0;

let rows = SimpArray.length;
let col = SimpArray[0].length;

let i = 0;
let j = 0;
let k = 0;

let l = SimpArray.length - 1;

while (i < rows && j < col  && k < rows && l >= 0){
    LeftToRight += SimpArray[i][j];
    RightToLeft += SimpArray[k][l];
    i++;
    j++;
    k++;
    l--;
}
  console.log(Math.abs(LeftToRight - RightToLeft));



