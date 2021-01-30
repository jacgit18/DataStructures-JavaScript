const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (value) => {
  console.log(value);
};

handleSuccess();

const handleFailure = (value) => {
  console.log(value);
};

handleFailure();
checkInventory(order).then(handleSuccess, handleFailure);