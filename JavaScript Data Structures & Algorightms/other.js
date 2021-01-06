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
  