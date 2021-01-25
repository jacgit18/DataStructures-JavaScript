// Let’s break down what’s happening in the above code:

// We invoke returnsFirstPromise() which returns a promise.
// We invoke .then() with a success handler.
// Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return a new promise.
// We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!
// Inside that second .then(), we have a success handler which will log the second promise’s resolved value to the console.
// Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. 
// Imagine if we were handling five or ten promises!


const {checkInventory, processPayment, shipOrder} = require('./library4.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
});