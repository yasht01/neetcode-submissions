class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
      let longest = 0;

      let count = 0;

      for (let num of nums) {
        count = num === 1 ? count + 1 : 0;
        longest = Math.max(count, longest);
      }

      return longest;
    }
}
