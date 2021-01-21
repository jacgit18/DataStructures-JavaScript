class ArrayStack {
  PalindromeStackArray = () => {
      // basic usage of stack using arrays
      // better way to use stack with array first in last out
    let letters = [];
    let words = "racecar";
    let rwords = "";


    for (let i = 0; i < words.length; i++){
        letters.push(words[i]);
    }

    for (let i = 0; i < words.length; i++){
        rwords += letters.pop();
    }

    rwords === words ? console.log(`${words} is palindrome`) : console.log(`${words} is not palindrome`);
  }; 


  
}

const mycon = new ArrayStack();
mycon.PalindromeStackArray();

const add2 = (a, b) => { return a + b; };
// wont work in class

 // like array but no duplicates and is a un-ordered 
 // pool of elements meaning no index and only have values no key

 // sets
 const myarray = [1, 2, 3, 4, 5];
 const myset = new Set(myarray);



console.log(myset.has(2)); // boolean
console.log(myset.size);
myset.add([6, 7, 8]);
console.log(myset);
myset.delete(3);
console.log(myset);
myset.clear();
console.log(myset);
myset.add(myarray);

// maps
const mymap = new Map([['firstname', 'jack'], ['lastname', 'man']]);

console.log(mymap);

const first_name = {};
const last_name = {};

const mymap2 = new Map([[first_name, 'jack'], [last_name, 'man']]);
console.log(mymap2);

const mymap3 = new Map([[{}, 'jack'], [{}, 'man']]);
mymap3.set(2, 'cat');
console.log(mymap3.has(2)); // search by key

console.log(mymap3);
mymap3.delete(2);
console.log(mymap3);


console.log(mymap3.size);
mymap3.clear;
console.log(mymap3);
