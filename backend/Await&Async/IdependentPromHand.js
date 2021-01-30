let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library4.js')

// what if our async function contains multiple promises which are not dependent on the results of one another to execute?
async function serveDinner() {
 const vegetablePromise = steamBroccoli();
 const starchPromise = cookRice();
 const proteinPromise = bakeChicken();
 const sidePromise = cookBeans();
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner()
