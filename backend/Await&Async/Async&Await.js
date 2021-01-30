const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();


// We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. 
// Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function 
// will still run— it just won’t have the desired results.


// async function noAwait() {
//     let value = myPromise();
//     console.log(value);
//    }
    
//    async function yesAwait() {
//     let value = await myPromise();
//     console.log(value);
//    }
    
//    noAwait(); // Prints: Promise { <pending> }
//    yesAwait(); // Prints: Yay, I resolved!

// Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed 
// before the promise had resolved.

// Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable 
// value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.