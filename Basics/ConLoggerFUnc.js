class ConsoleObj {

    ConsoleDebuggerSpacer = () => {
        console.log(`\n`);
    
    
    }


ConsoleDebuggerParamOne = (x) => {
    console.log(`${x}`);


}



ConsoleDebuggerParamOneLinkList = (x) => {
    console.log(x);


}

ConsoleDebuggerParamTwo = (x, y) => {
    // console.log(x, y);
    console.log(`${x} ${y}`);


}

ConsoleDebuggerParamThree = (x, y, z) => {
    // console.log(x, y);
    console.log(`${x} ${y} ${z}`);


}

ConsoleDebuggerParamFour = (x, y, z, a) => {
    // console.log(x, y);
    console.log(`${x} ${y} ${z} ${a}`);


}


}

// ConLoggerFuncParamOne.ConsoleDebuggerParamTwo(`The Index ` + index, item);

// const ConLoggerFuncParamOne = require('./ConLoggerFUnc');


module.exports = ConsoleObj;