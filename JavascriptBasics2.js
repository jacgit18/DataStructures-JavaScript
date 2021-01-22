
const Poly = require('./JavascriptBasics1Ext');
const OG = require('./JavascriptBasics1');




class Prac {

    constructor(){
    
    }
    /**
    * created new instance of class object and called method without inheritance
    */
    // classOBJcaller = () =>{
    //     let basic1 = new Poly();
    //     basic1.funcOne('kim', 85); // still being called inside of this method even if were not calling classOBJcaller in this classor not the case
    //   }
    //   cant do this in class unless using typescript   
    // this is not a method it is a function which isnt allowed in javascript class only constructor get set and method or aceesor or property
        
    // function tester(){

    // }

     //   const printHello = () => { 
    //     console.log('hello'); 
    //   }; 

    // classOBJcaller2 = () =>{
    //     let basic2 = new OG();
    //     basic2.funcOne('Tim', 4);
    //   }

     // see if you can set getters and setters to be functional methods like in rec class
     


}

// const pracHolder1 = new Poly();
// pracHolder1.funcOne('kim', 56);

console.log('\n');

const pracHolder2 = new OG();
pracHolder2.funcOne('timmy', 797);
// outputs from methods in the new class that extends to the OG is being console logged
// even they dont exist in the original this doesnt happen when OG is the only thing imported


////////////////////////
// Proably not understanding about poloymorphism
///////////////////////////