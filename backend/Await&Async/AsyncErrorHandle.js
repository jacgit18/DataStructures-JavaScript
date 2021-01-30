const cookBeanSouffle = require('./library3.js');

// Write your code below:

async function hostDinnerParty() {
 try {
   let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);
 }
 catch(error){
   console.log(error);
   console.log('Ordering a pizza!');
 }
}

hostDinnerParty();



// When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown.
// This can make debugging challenging. With async...await, we use try...catch statements for error handling. By using
//  this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch 
//  both synchronous and asynchronous errors. This makes for easier debugging!