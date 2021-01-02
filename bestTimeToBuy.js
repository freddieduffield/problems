/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

function bruteForce(prices) {
  return calculate(prices, 0);
}

function calculate(prices, s) {
  if (s >= prices.length) return 0;
  let max = 0;

  for (let start = s; start < prices.length; start++) {
    let maxProfit = 0;

    for (let i = start + 1; i < prices.length; i++) {
      if (prices[start] < prices[i]) {
        let profit = calculate(prices, i + 1) + prices[i] - prices[start];

        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }

    if (maxProfit > max) {
      max = maxProfit;
    }
  }
  return max;
}

function peakValley(prices) {
  let i = 0;
  // initiate peak valleys with first price
  let valley = prices[0];
  let peak = prices[0];

  let maxProfit = 0;
  // while not at last price
  while (i < prices.length - 1) {
    // find valley
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];

    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }

    peak = prices[i];
    maxProfit += peak - valley;
  }
  return maxProfit;
}

// function simpleOnePass(prices) {
//   let maxProfit = 0;
//   for(let i = 1; i < prices.length; i++) {
//     if(prices[i] > prices[i-1]) {
//       maxProfit += prices[i] - prices[i-1];
//     }
//   }
//   return maxProfit;
// }

const simpleOnePass = (prices) =>
  prices.reduce((acc, curr, i) => {
    if (prices[i] > prices[i - 1]) {
      acc += prices[i] - prices[i - 1];
    }
    return acc;
  }, 0);

module.exports = { bruteForce, peakValley, simpleOnePass };
