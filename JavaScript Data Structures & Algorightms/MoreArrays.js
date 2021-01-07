// array with objects 
const users =[
    {name:"ba", age: 24},
    {name:"awdaba", age: 243},
    {name:"abafafa", age: 234},
    {name:"bafdas", age: 214}
    ];
    
    for (let i of users){
        console.dir(i);
    }
    
    
    // value of each key
    // const myuser = users[0];
    // for (let userpro in myuser){
    //     console.table(`${userpro, myuser[userpro]}`);
    // }
    
    
    const filterusers = users.filter(theUser =>{
    return theUser.age < 230;
    });
    
    console.table(filterusers);
    

    const names = users.map(Myusermap =>{
    return {
    ...Myusermap,
    description: `${Myusermap.name} is ${Myusermap.age} years old `
    };
    });
    
    console.log(names);

    console.log(`\n Reduce statement `)

const keyedUsers = users.reduce((acc,userRed) =>{
        if(userRed.age < 25){
            return acc;

        }
        acc[userRed.name] =userRed;
        return acc;


    }, {});
    console.dir(keyedUsers);
    console.log('\n');


const userEnt = users[0];
const entries = Object.entries(userEnt);
console.log(entries);
console.log(Object.fromEntries(entries));





// This method checks if all items in an array pass the specified condition and returntrue if passed, else false.
const num = [1, -1, 2, 3];
let allPositive = num.every((value) => {
return value >= 0;
})
console.log(allPositive); // would return fals

console.log('\n');

// This method checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.
let atLeastOnePositive = num.some((value) => {
    return value >= 0;
    })
    console.log(atLeastOnePositive); // would return true

    console.log('\n');

// This method checks if an array contains a certain item. It is similar to .some(), but instead of looking for a specific condition to pass, 
// it checks if the array contains a specific item.
let usersCheck = ['paddy', 'zaddy', 'faddy', 'baddy'];
usersCheck.includes('baddy'); 

console.log('\n');


    const userNames = ['tina', 'danny', 'mark', 'bolaji'];
const display = userNames.map(item => {
return '<li>' + item + '</li>' + '\n';
})
const render = '<ul>' + display.join('') + '</ul>' + '\n';
console.table(render);

console.log('\n');


// adds dollar sign to numbers
const numbers = [10, 3, 4, 6];
const dollars = numbers.map( number => '$' + number);
console.log(dollars);
// ['$10', '$3', '$4', '$6'];


console.log('\n');



    // const foundUser = users.find(thefounduser => {
    // return thefounduser.name === "abafafa";
    // });
    
    // console.log(foundUser); // findIndex gives you index 
    

let fruits = ['apple', 'orange', false, 5];
console.table(fruits.indexOf('orange'));
console.table(fruits.indexOf(5));
console.table(fruits.indexOf(null)); // means doesnt exist 
console.table(fruits.indexOf(true)); // means doesnt exist 
console.log('\n');


// This method works the same way indexOf() does except that it
//  works from right to left. It returns the last index 
//  where the item was found
let fruit = ['apple', 'orange', false, 3, 'apple']
console.table(fruit.lastIndexOf('apple'));
