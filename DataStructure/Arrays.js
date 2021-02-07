let firstNumbers = [1, 2, 3];
let secondNumbers = [400, 50, 686];
let merged = firstNumbers.concat(secondNumbers);

class MyArray {
  ArrayStuffOne = () => {
    let myBox = [];
    console.log(`The Intial empty array declaration print ${myBox}`);
    myBox = ["hello", 1, 2, 3, true, "hi"];

    console.log(myBox);
    console.log(myBox.toString()); // removes quotes and bracket
    console.log(`${myBox}`); // seems to do same thing as to string

    // this method specifically meant displaying objects to the console called
    console.dir(myBox.join("  ")); // used spaces
    console.log(myBox.join("  ")); // used spaces

    console.log(myBox.join(""));
    console.log(myBox.join("-"));
  };

  ArrayStuffPop = () => {
    // This method combines two arrays together or add
    // more items to an array and then return a new array.
    console.table(merged);
    merged.pop();
    console.log(merged);
    merged.push(0);
    console.log(merged);
  };

  ArrayStuffShift = () => {
    // This method removes the first item of an array and returns it.
    merged.shift();
    console.log(merged);
  };

  ArrayStuffUnshift = () => {
    // This method adds an item(s) to the beginning of an array and changes the original array.
    merged.unshift(9000);
    console.log(merged);
  };

  ArrayStuffSplice = () => {
    let myNwSpliceBx = [];
    myNwSpliceBx = ["test", "and", "next", "one"];

    myNwSpliceBx.splice(0, 3); // if you went over index all elemwnts
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
theArray.ArrayStuffShift();
theArray.ArrayStuffUnshift();
theArray.ArrayStuffSplice();
theArray.ArrayStuffSpliceTwo();

theArray.ArrayStuffSpliceThree();
theArray.ArrayStuffSlice();
theArray.ArrayStuffSliceTwo();
theArray.ArrayStuffSplit();
theArray.ArrayStuffPosition();



   


   


   


