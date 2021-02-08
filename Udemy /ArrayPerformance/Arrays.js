const ConLoggerFuncParam = require("../../Basics/ConLoggerFUnc.js");
let firstNumbers = [1, 2, 3];
let secondNumbers = [400, 50, 686];
let merged = firstNumbers.concat(secondNumbers);
let UdemyarryMemory = ["a", "b", "c", "d"]; // storing 16 bytes in memory 4 elements * 4 indexs(0-3)
const consoleItem = new ConLoggerFuncParam();

class MyArray {
  ArrayStuffOne = () => {
    let myBox = [];
    // console.log(`The Intial empty array declaration print ${myBox}`);
    consoleItem.ConsoleDebuggerParamTwo(
      "The Intial empty array declaration print",
      myBox
    );
    myBox = ["hello", 1, 2, 3, true, "lastIndex"];
    consoleItem.ConsoleDebuggerSpacer();
    consoleItem.ConsoleDebuggerParamTwo(
      "The array prints after declaration ",
      myBox
    );
    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamTwo(
      "We return the value of a String object ",
      myBox.toString()
    );
    // In simple words, the console.log() returns the object in its string representation and console.dir()
    // recognizes the object just as an object and outputs its properties. Both log() and dir() returns the
    // string just as a string.
    consoleItem.ConsoleDebuggerSpacer();

    console.dir(myBox.join("  "));

    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamFour(
      "joins returns the array as a string ",
      myBox.join(" "),
      "the qoutes inserts space when you put space between them",
      myBox.join("")
    );
    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamTwo(
      "You can also insert things in between ",
      myBox.join("-")
    );
    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamTwo("Hi what is up ", UdemyarryMemory);
  };

  ArrayStuffPop = () => {
    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamThree(
      "Accessing data in array ",
      `"${UdemyarryMemory[2]} "`,
      " O(1)"
    );
    // This method combines two arrays together or add
    // more items to an array and then return a new array.
    console.table(merged);
    consoleItem.ConsoleDebuggerSpacer();
    // static array an array of fixed size dynamic array lets you copy and rebuild an array in memory with more size
    // Javascript arrays are already dynamic by default so you dont have to do this
    // push can still be O(n) if you loop
    consoleItem.ConsoleDebuggerParamFour(
      "appended new value at the end ",
      merged.push(4000),
      "The new array is",
      merged + " O(1) "
    );
    consoleItem.ConsoleDebuggerSpacer();
    consoleItem.ConsoleDebuggerParamFour(
      "Removing at the end ",
      merged.pop(),
      "The new array is",
      merged + " O(1) because not looping "
    );
  };

  ArrayStuffUnshift = () => {
    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamFour(
      "This method loops through array and unshift the position to append new value to beginning of array which is  O(n)",
      merged.unshift(9000),
      "The new array is",
      merged
    );
  };

  ArrayStuffShift = () => {
    // This method removes the first item of an array and returns it.
    consoleItem.ConsoleDebuggerSpacer();

    consoleItem.ConsoleDebuggerParamThree(
      "This is the array " + merged,
      "Then We remove " + merged.shift(),
      "The new array is " + merged
    );
  };

  ArrayStuffSplice = () => {
    let myNwSpliceBx = [];
    myNwSpliceBx = ["test", "and", "next", "one"];

    myNwSpliceBx.splice(0, 3); // if you went over index all elements O(n)
    // would be removed
    // if 3 wass the only parameter every element starting from the given index will be removed from the array:
    // so same result
    console.log(myNwSpliceBx); // removed first 3 elements
    // the last index isnt included
  };

  ArrayStuffSpliceTwo = () => {
    let schedule = ["I", "have", "a", "meeting", "tommorrow"];
    // removes 4 first elements and replace them with another
    schedule.splice(0, 4, "we", "are", "going", "to", "swim");
    console.dir(schedule);
  };

  ArrayStuffSpliceThree = () => {
    let myschedule = ["I", "have", "a", "meeting", "with"];
    // adds 3 new elements to the array
    myschedule.splice(5, 0, "some", "clients", "tommorrow");
    console.table(myschedule);
  };

  ArrayStuffSlice = () => {
    let numbers = [1, 2, 3, 4];
    console.log(numbers.slice(0, 3));
    // returns [1, 2, 3]
    console.log(numbers); // returns the original array
  };

  ArrayStuffSliceTwo = () => {
    // The best way to use slice() is to assign it to a new variable.
    let message = "congratulations";
    const abbrv = message.slice(0, 7) + "s!";
    console.log(`New word is : ${abbrv}`);
  };

  ArrayStuffSplit = () => {
    let firstName = "hello, my name is bolaji, I am a dev.";
    // return the string as an array
    console.log(firstName.split(",", 3));

    let lastName = "Bolaji";
    console.log(lastName.split(""));
  };

  ArrayStuffPosition = () => {
    const numberClusters = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    const target = numberClusters[2][1];

    console.log(target);
  };
}

const theArray = new MyArray();
theArray.ArrayStuffOne();
theArray.ArrayStuffPop();
theArray.ArrayStuffUnshift();

theArray.ArrayStuffShift();
theArray.ArrayStuffSplice();
theArray.ArrayStuffSpliceTwo();

theArray.ArrayStuffSpliceThree();
theArray.ArrayStuffSlice();
theArray.ArrayStuffSliceTwo();
theArray.ArrayStuffSplit();
theArray.ArrayStuffPosition();
