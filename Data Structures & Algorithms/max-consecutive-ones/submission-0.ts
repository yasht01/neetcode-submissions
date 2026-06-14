class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
      let longest = 0;

      let start = 0, end = 0;

      while (end < nums.length) {
        if (nums[end]) {
          longest = Math.max(longest, end - start + 1);
        } else {
          start = end + 1;
        }

        end++;
      }

      return longest;
    }
}
