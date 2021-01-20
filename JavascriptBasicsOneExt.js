// const testImport = require('./Test2.js').default;

// 'use strict';
// const assert = require('assert').strict;

const ScopeVar = require('./JavascriptBasicsOne').default;
let newval = "Hello";
// import ScopeVar from './JavascriptBasicsOne';

// overide Scopevar method
class BasicOne extends ScopeVar{
    constructor(name, myage, newval){
        super(name,myage);
        console.log('Class object created and extended and overriden by polymorphism');

        this.newval= newval;

     }

     // retuen by default 
     funcOne = (name, myage) => {

     console.log(`Hi my name is ${name} im ${myage} years old and this is a new a new class calling and doing poloymorphism ${newval} `);
     }

     product = (a, b) => a + b - 5; 




}

let basic = new BasicOne();
basic.funcOne('Joel', 75);

// calling OG method

for (let i = 0; i < 2; i++){
    basic.defaultparam();
    // find out how to add condition to add param

}
basic.defaultparam(4,5);

//console.log(product(12,4));
// or
let y = basic.product(10,2);
console.log(y);


basic.funcSwitch();
basic.operators();
