/*
1. find the earliest lowest index
2. find the highest price after the index 

1. create another sorted the array 
2. find the lowest number with the earliest index in the orig array
3. difference between that and the highest number in range.

1a. an array of array of all profits
1b. an array of profits
*/

function bruteForce(prices) {
  return calculate(prices, 0);
};

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

}

module.exports = {bruteForce, peakValley};
