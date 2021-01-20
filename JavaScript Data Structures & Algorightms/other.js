const thelistofEach = ["mile", "cow", "kay"];
  thelistofEach.forEach((item, index) => {
      console.log(index, item);
  }); // how to do with for of

//const shoplist = ["fig", "beef", "apple"];
//shoplist.push("drink");
//console.log(shoplist);


// figure out
const fordecon = {
    count: 0,
    shoplist: ["fig", "beef", "apple"] 
};

const { count, shoplist } = fordecon;

for (count of shoplist) {
  console.log(shoplist[count]);
}


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
