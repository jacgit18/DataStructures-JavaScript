const assert = require('assert').strict;// like an import in java
// require('assert').strict;

function add1(a, b) {
  return console.log(a + b);
}

// assert is used for testing purposes not for production
add1(5, 5);

// alternative function
const add2 = (a, b) => { return a + b; };

assert.equal(add2(5, 2), 7);





