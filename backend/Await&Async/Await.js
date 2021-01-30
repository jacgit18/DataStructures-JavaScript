// The JavaScript async...await syntax allows multiple promises to be initiated and then resolved for values
// when required during execution of the program. As an alternate to chaining .then() functions, it offers better
// maintainablity of the code and a close resemblance synchronous code.

// Constructing one or more promises or calls without await can allow multiple async functions to execute simultaneously.
// Through this approach, a program can take advantage of concurrency, and asynchronous actions can be initiated within an 
// async function. Since using the await keyword halts the execution of an async function, each async function can be awaited 
// once its value is required by program logic.



// When using JavaScript async...await, multiple asynchronous operations can run concurrently. If the resolved value is required 
// for each promise initiated, Promise.all() can be used to retrieve the resolved value, avoiding unnecessary blocking.

let promise1 = Promise.resolve(5);
let promise2 = 44;
let promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});
 
Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});