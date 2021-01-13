
// speak(); calling here wont work because where storing the function in a variable so order declaration matters

const speak = function(){
    console.log('his there');
}


speak();


greet();

// no if you wrote a regular function like 
function greet(){
    console.log(" we print anywhere order doesnt matter ");
}

greet();

// that is one of main differences between function expression like speak and function declarations like greet


// a general things with function is variable scope

const calcArea = ((radius) => {
// let area = 3.14 * radius**2; // where squaring by two also this value isnt available outsid function unless you return
// return area;
// or just do this
return 3.14 * radius**2;

});

// once you return when you call you have to store in a variable to get value
let myarea = calcArea(5);
const myarea2 = calcArea(5);

console.log(myarea);
console.log(myarea2);

// you can pass one method return to another methods params

const calVol = ((newarea) =>{
return newarea + 1;
});


console.log(calVol(myarea));

// long callback function 

const firstFunc= ((FunctoPass) =>{
let val = 5;
FunctoPass(val); // this make it a function also in param the ref name is restricted to the function so where not passing value 
// to a function yet until we call the function 
});

// calling function 
firstFunc((value) => {
console.log(value);
});





