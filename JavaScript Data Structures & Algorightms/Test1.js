
const testImport = require('./Test2.js');



class Test1{

    constructor(){

    }

    // this is a function not allowed in javascript class only constructor get set and method or aceesor or property
    // function tester(){

    // }

    tester(){
    let importHandler = new testImport();
    console.log(importHandler.getName());
    }


    get testGet(){

    }
    

}

let testCall = new Test1();
testCall.tester();
