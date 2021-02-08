const ConLoggerFuncParam = require("../../Basics/ConLoggerFUnc.js");
const consoleItem = new ConLoggerFuncParam();

function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);// this is the same result as str.split()

    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
  consoleItem.ConsoleDebuggerParamTwo(reverse('Timbits Hi'), 'first way');
  consoleItem.ConsoleDebuggerParamTwo(reverse2('Timbits Hi'), 'second way');
  consoleItem.ConsoleDebuggerParamTwo(reverse3('Timbits Hi'), 'third way');

  