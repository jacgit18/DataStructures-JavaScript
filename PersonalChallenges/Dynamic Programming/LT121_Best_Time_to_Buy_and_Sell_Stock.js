const maxProfit = (prices) => {
    const pricesLen = prices.length;
    if (pricesLen === 0) return 0;

    let ans = 0, i = 0, j = 1, currentMin = prices[0];
    while(j < pricesLen) {
        ans = Math.max(prices[j] - currentMin, ans);
        currentMin = Math.min(prices[j], currentMin);
        ++j;
    }
    return ans;
};


let price = [7,1,5,3,6,4];

// const test = maxProfit();

// test()
// console.log(test(price))
console.log(maxProfit(price))