//reverse loop

const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

 
console.log('\n')

// Loop Speed and syntax


let pet =['dog', 'cat', 'lion'];
pet.push("fish");
pet['species'] = 'mammals';


for(let i = 0; i < pet.length; i++){
    if(pet[i] == 'cat' ){
        console.log(pet);
        console.log(pet[i]);

        // species doesnt show up becaasue were only iterating over integers and species doesnt exist

        // cant use this in foreach loop 
    
        // break;
    }
}
console.log('\n')


// for each takes a call back function as parameter
pet.forEach((pet, index) =>{
console.log(pet);
 // dont need to added [index] to get value once in clean format
 // foreach only works with arrays species is a object so it wont show also mammal is considered as a key and isnt a interger
}
// ,{} more brackets can be added to do more functional things 
// just adding empty brackets

);
console.log('\n')



// for addes species because it can iterate over objects 
for(petid in pet){
    console.log(pet[petid]);
    // console.log(petid);
    // console.log(pet);
}
console.log('\n')



// newer dont use yet 
// also mammal shows up because for of loops through the  values of an iterable objects.
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
for(pets of pet){
    console.log(pet)
}


// Speed test
const arr = [...Array(5001).keys()];
console.log(arr);

console.time('regular-for');
let output1 = "";
for(let a = 0; a < arr.length; a++){
output1 += arr[a];
}
console.timeEnd('regular-for');


console.time('for-of');
let output2="";
for(let value of arr){
    output2+= value;
}
console.timeEnd('for-of');


console.time('forEach');
let output3="";
arr.forEach((value) =>{
output3+=value;
});
console.timeEnd('forEach');


console.time('for-in');
let output4="";
for(let value in arr){
output4+=value;
}
console.timeEnd('for-in');


// const result2 = [];
// result2.push(output1);
// result2.push(output2);
// result2.push(output3);
// result2.push(output4);
// console.log(result2);



