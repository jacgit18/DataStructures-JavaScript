// A JavaScript Promise object can be in one of three states: pending, resolved, or rejected.
// While the value is not yet available, the Promise stays in the pending state. Afterwards, it transitions to one of the two states: resolved or rejected.
// A resolved promise stands for a successful completion. Due to errors, the promise may go in the rejected state.

// const promise = new Promise((resolve, reject) => {
//     const res = true;
//     // An asynchronous operation.
//     if (res) {
//       resolve('Resolved!');
//     }
//     else {
//       reject(Error('Error'));
//     }
//   });

//   promise.then((res) => console.log(res), (err) => alert(err));

// The function passed as the second argument to a .then() method of a promise object is used when the promise is rejected.
// An alternative to this approach is to use the JavaScript .catch() method of the promise object. The information for the
// rejection is available to the handler supplied in the .catch() method.

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(Error('Promise Rejected Unconditionally.'));
//     }, 1000);
//   });

//   promise.then((res) => {
//     console.log(value);
//   });

//   promise.catch((err) => {
//     alert(err);
//   });

// The JavaScript Promise.all() method can be used to execute multiple promises in parallel. The function accepts an array of promises as an argument.
// If all of the promises in the argument are resolved, the promise returned from Promise.all() will resolve to an array containing the resolved values
//  of all the promises in the order of the initial array. Any rejection from the list of promises will cause the greater promise to be rejected.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 300);
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 200);
//   });

//   Promise.all([promise1, promise2]).then((res) => {
//     console.log(res[0]);
//     console.log(res[1]);
//   });

// A JavaScript promise’s executor function takes two functions as its arguments. The first parameter represents the function
// that should be called to resolve the promise and the other one is used when the promise should be rejected. A Promise object
// may use any one or both of them inside its executor function.

//   const executorFn = (resolve, reject) => {
//     resolve('Resolved!');
//   };

//   const promise = new Promise(executorFn);


// The .then() method of a JavaScript Promise object can be used to get the eventual result (or error) of the asynchronous operation.
// .then() accepts two function arguments. The first handler supplied to it will be called if the promise is resolved. 
// The second one will be called if the promise is rejected.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result");
  }, 200);
});

// .then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. 
// When the promise settles, the appropriate handler will be invoked with that settled value.

// The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.

// The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
// We can invoke .then() with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. 
// If the appropriate handler is not provided, instead of throwing an error, .then() will just return a promise with the same settled 
// value as the promise it was called on. One important feature of .then() is that it always returns a promise. We’ll return to this in 
// more detail in a later exercise and explore why it’s so important.

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    alert(err);
  }
);

// setTimeout() is an asynchronous JavaScript function that executes a code block or evaluates an expression through a 
// callback function after a delay set in milliseconds.

const loginAlert = () =>{
    alert('Login');
  };
   
  setTimeout(loginAlert, 1000);
