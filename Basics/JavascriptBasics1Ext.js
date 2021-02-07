
const ScopeVar = require('./JavascriptBasics1');

let newval = "Hello";
// const ScopeVar = require('./JavascriptBasicsOne').default;

// import ScopeVar from './JavascriptBasicsOne';

// overide Scopevar method
class BasicOne extends ScopeVar{
    constructor(name, myage, newval){
        super(name,myage); // binds data
        console.log('Class object created and extended and overriden by polymorphism');

        this.newval= newval;

     }

    

    

     product = (a, b) => a + b - 5; 

     // calls original and prints new messages seems to work with only this way might work other way in typescript try it out 
     mySupercall(){
        super.mySupercall();
        console.log("New class");
    }

    // still prints out original for some reason
    // @ts-check
    funcOne(name, myage) {
        super.funcOne(name, myage);
        // why isnt this called right after
       console.log(`Hi my name is ${name} im ${myage} years old and this is a new a new class calling and doing poloymorphism ${newval} `);
       }

     // retuen by default 
    //  funcOne = (name, myage) => {
    //     //  super.funcOne(name, myage);
    //  console.log(`Hi my name is ${name} im ${myage} years old and this is a new a new class calling and doing poloymorphism ${newval} `);
    //  }



}

let basic0 = new BasicOne();
basic0.funcOne('Joel', 75);

// calling OG method
console.log("================== Why is this called =================");
for (let i = 0; i < 2; i++){
    basic0.defaultparam();
    // find out how to add condition to add param

}
basic0.defaultparam(4,5);

//console.log(product(12,4));
// or
let y = basic0.product(10,2);
console.log(y);
basic0.mySupercall();
console.log("===================================");

// calling from parent class
basic0.funcSwitch();
basic0.operators();


module.exports  = BasicOne; // older export way
// module.exports.default  = BasicOne;

