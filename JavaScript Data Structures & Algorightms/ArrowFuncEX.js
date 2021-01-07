// Arrow function with no arguments 
const printHello = () => { 
    console.log('hello'); 
  }; 
  printHello(); // Prints: hello
   
  // Arrow functions with a single argument 
  const checkWeight = weight => { 
    console.log(`Baggage weight : ${weight} kilograms.`); 
  }; 
  checkWeight(25); // Prints: Baggage weight : 25 kilograms.
   
   
  // Concise arrow functions
  const multiply = (a, b) => a * b; 
  console.log(multiply(2, 30)); // Prints: 60

  // Anonymous function
const rocketToMars = function() {
    return 'BOOM!';
  }


//   helper func
function monitorCount(rows, columns) {
  
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
  }
  
   costOfMonitors();
  
   const totalCost = costOfMonitors(5,4) ;
  
   console.log(totalCost);