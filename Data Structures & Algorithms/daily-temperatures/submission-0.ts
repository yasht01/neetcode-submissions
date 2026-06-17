class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
      let result = new Array(temperatures.length).fill(0);
      const stack = [];

      for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {
          const [temp, index] = stack.pop();
          result[index] = i - index;
        }

        stack.push([temperatures[i], i]);
      }

      return result;
    }
}
