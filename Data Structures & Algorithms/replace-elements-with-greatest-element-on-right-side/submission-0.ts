class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
      let maxVal = arr[arr.length - 1];

      let result = [-1];

      for (let i = arr.length - 1; i >= 1; i--) {
        maxVal = Math.max(maxVal, arr[i]);
        result.push(maxVal);
      }

      return [...result].reverse();
    }
}
