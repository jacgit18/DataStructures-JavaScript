const ConLoggerFuncParamOne = require('./ConLoggerFUnc');
  

const thelistofEach = ["mile", "cow", "kay"];
  thelistofEach.forEach((item, index) => {
      // console.log(index, item);
      ConLoggerFuncParamOne.ConsoleDebuggerParamTwo(`The Index ` + index, item);

  }); // how to do with for of

//const shoplist = ["fig", "beef", "apple"];
//shoplist.push("drink");
//console.log(shoplist);





// deconstruction used here
for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i, v)
  }
  


  let i=0;
 while(i<5){
   //console.log("number is " + i);
   i++;
 }

// or

// do{
//     console.log("number is " + i)
//     i++;

// }
// while(i>5);

//console.log("For loop ");

for(let i =0;i<5;i++) {
    //console.log("number is " + i);

}

for(i=0;i<50;i++) {
    //console.log("im sorry " + i);

}

// Basically for each also goodfor going over array once
// use regular for loop to control specific things


// promise uses async

const prom = new Promise((resolve, reject) => {
  setTimeout(() =>{
  //resolve({user: "ed", pass: "dfvdbdbd"});
  reject(new Error("something wrong"));
  
  }, 2000);
  });
  
  // prom.then(data => {
  // console.log(data);
  // });
  
  prom.then(data => {
      console.log(data);
      }).catch(err => console.log(err));
  

      
      const iterable = ['hello', 'world'];

let elem;
for (elem of iterable) {
  console.log(elem);
}

//If you omit all three parts of the head, you get an infinite loop:

//for (;;) {
  //if (Math.random() === 0) break;
//}
// map
const shoplist = ["fig", "beef", "apple"];
//const newlistt = shoplist.map(item=> {
//    return item + " new "; 
//});// modified array
//console.log(newlistt);

const newlist = shoplist.map(item => item + " new ");// modified array
console.log(newlist);





