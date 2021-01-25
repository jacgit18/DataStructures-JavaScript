const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library2.js');

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

// The true beauty of async...await is when we have a series of asynchronous actions 
// which depend on one another. For example, we may make a network request based on a 
// query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:

function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}

// Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().

// We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().

// In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).

// We use another .then() to print the second promise’s resolved value to the console.


async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
   }


// We mark our function as async.

// Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise.

// Next, we log firstValue to the console.

// Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value.

// Finally, we log secondValue to the console.

