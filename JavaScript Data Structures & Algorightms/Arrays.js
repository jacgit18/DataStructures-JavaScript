let myBox = [];  
console.log(`The Intial empty array declaration print ${myBox}`);
myBox = ['hello', 1, 2, 3, true, 'hi'];

console.log(myBox);
console.log(myBox.toString()); // removes quotes and bracket
console.log(`${myBox}`); // seems to do same thing as to string

// this method specifically meant displaying objects to the console called
console.dir(myBox.join('  ')); // used spaces  
console.log(myBox.join('  ')); // used spaces  

console.log(myBox.join('')); 
console.log(myBox.join('-')); 

// This method combines two arrays together or add
// more items to an
// array and then return a new array.
let firstNumbers = [1, 2, 3];
let secondNumbers = [400, 50, 686];
let merged = firstNumbers.concat(secondNumbers);
console.table(merged);

merged.pop();
console.log(merged);
merged.push(0);
console.log(merged);

// This method removes the first item of an array and returns it.

merged.shift();
console.log(merged);

// This method adds an item(s) to the beginning of an array and changes the original array.

merged.unshift(9000);
console.log(merged);


let myNwSpliceBx = [];
myNwSpliceBx = ['test', 'and', 'next', 'one'];

myNwSpliceBx.splice(0, 3); // if you went over index all elemwnts 
// would be removed
// if 3 wass the only parameter every element starting from the given index will be removed from the array:
// so same result
console.log(myNwSpliceBx); // removed first 3 elements
// the last index isnt included


let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];
// removes 4 first elements and replace them with another
schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');
console.dir(schedule); 
 
let myschedule = ['I', 'have', 'a', 'meeting', 'with'];
// adds 3 new elements to the array
myschedule.splice(5, 0, 'some', 'clients', 'tommorrow');
console.table(myschedule); 


let numbers = [1, 2, 3, 4]
console.log(numbers.slice(0, 3)); 
// returns [1, 2, 3]
console.log(numbers) // returns the original array


// The best way to use slice() is to assign it to a new variable.
let message = 'congratulations'
const abbrv = message.slice(0, 7) + 's!'; 
console.log(`New word is : ${abbrv}`);



let firstName = 'hello, my name is bolaji, I am a dev.';
// return the string as an array
console.log(firstName.split(',',3));

let lastName = 'Bolaji';
console.log(lastName.split(''));





