class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let longestSequence = 0;
      const numSet = new Set(nums);

      for (let num of numSet) {
        if (!numSet.has(num - 1)) {
          let length = 1;

          while (numSet.has(num + length)) {
            length++;
          }

          longestSequence = Math.max(longestSequence, length);
        }
      }

      return longestSequence;
    }
}
