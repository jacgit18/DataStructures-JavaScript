/**  javascroptt has 3 ways to make a vairiable const, let, and var which 
 * is the orignal then const and let came out let isnt really used in mobile browsers may change
*/
const name = "John";
let myage = 2;

// 'use strict';
class ScopeVar {

    constructor(name, myage){
        console.log('Class object created');

       this.name = name;
       this.myage = myage;
    }


     /**
      * The var statement declares is scoped to current
      * execution context meaning there scoped to there
      * enclosing function like if you had a function with a 
      * for loop containing var it would scoped to the function 
      * not just the for loop block but is limited to function
      * otherwise it,s global. it can be reasign whenever and 
      * intialized with or without value and can be redeclared at any point
      */
    //  funcOne = (name, myage) => {
        funcOne(name, myage) {

        console.log(`Hi my name is ${name} im ${myage} years old`);
    
        
        // var redeclare this cant be done with others
        var x = 1;
        var x = "bdbnd3";
        
        
        let age = 22; 
        // if age wasnt equal to anything it would be consisdered
        // undifined because nothing would be intiallized 
        // if value was null then the variable value is
        //  explicitly clear  
        
        // let allows you to declare variables that are limited 
        // to the scope of a block statement like a for loop or 
        // if statement if you try to print let i outside the 
        // scope it will be undefined same for const,
        //  unlike var , which defines a variable globally, 
        // or locally to an entire function regardless of 
        // block scope. let also can be reassigned but cannot
        // be redeclared in the same scope
        
        
        console.log(age);
        
        const birthday = '01/16/2020'; 
        // birthday = '01/16/2019'; // wont change
        // fixed value vairiable like final datatype varname 
        // in java also const isnt immutable(unchanging over time)
        // but the variable references cannot be change in memory
        // and must be initialized with a value. besides that it is 
        // blocked scoped, isnt global, and cannot be redeclared
        // in same scope like let also let and const arent in the 
        // window object
        console.log(birthday);
    }

    funcSwitch = () =>{
        let games='baseball';
        console.log(`\n`);

    switch(games) {
        case "football":
        console.log("I hate football");
        break;
        case "baseball":
        console.log("I hate baseball");
        break;
        case "basketball":
        console.log("I hate basketball");
        break;
        default:
        console.log("I like other things");
        break;

    }
    console.log(`\n`);
    }

    defaultparam = (num1=1, num2=0) =>{
        // basically if nothing is passed when method
        // is called it has a value so you dont get an error
            console.log(num1 * num2);
        
        }

    product = (a, b) => a + b; // one line function

    /**
     * === checks the element data type and value
     * since index 0 and 2 arent the same value or type it is wrong
     * there is also !== which means not equal to value or not equal type 
     * == and != is just the value
     */
    operators = () => {
        let newray=[];
        newray=[1,'2','7','2','3','2','3','1'];
       
        if(newray[0]===newray[2] || newray[2]===newray[6]){
            console.log('Correct');
        }else{
            console.log('Wrong');

        }

        let isCorrect = false;

        // ternary operator ? is checking boolean value and : is else 
        isCorrect ? console.log('Correct!') : console.log('Incorrect!');
    }

    mySupercall(){
        console.log("Original class");
    }



}



module.exports  = ScopeVar; // older export way
// module.exports.default  = ScopeVar; 

// you can only export one default
// export default ScopeVar;

