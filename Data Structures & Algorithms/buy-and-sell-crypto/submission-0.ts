class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
      if (prices.length < 2) return 0;

      let start = 0, end = 1;
      let result = 0;

      while (end < prices.length) {
        let profit = prices[end] - prices[start];

        if (prices[start] > prices[end]) {
          start = end;
        }

        end++;
        result = Math.max(result, profit);
      }

      return result;
    }
}
