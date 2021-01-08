
    
  // why not working in this order
    
    const numbers = [34, 21, 1, 100, 42,-1,23]; 
    
    numbers.sort(Comparefunc);
    console.table(numbers);
    
  
    
 const Comparefunc = ((a, b) =>{
    return a - b;
    
    });
 
   