"use strict";

var PriceArray = [2, 7, 1, 5, 3, 6, 4];

var Maxprofit = function Maxprofit(prices) {
  // prices.sort();
  var minPrice = Math.max.apply(Math, prices);
  var maxPrice = Math.max.apply(Math, prices);
  var profit = 0; //   console.log(max_of_array)
  //   console.log(min_of_array)
  // var maxPrice =  Math.max(prices);
  // var minPrice =  Math.min(prices);
  // debug wont go throught rest of for loop

  for (var i = 0; i < prices.length; i++) {
    // console.log(Math.min.apply(Math, prices))
    // console.log(Math.max.apply(Math, prices))
    // buy at min first
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      return minPrice;
    } else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
      return profit;
    }
  }

  return console.log(profit);
};

Maxprofit(PriceArray);