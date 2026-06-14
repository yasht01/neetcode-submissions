class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
      let end = nums.length;
      let start = 0;

      while (start < end) {
        if (nums[start] === val) {
          end--;
          nums[start] = nums[end];
        } else start++;
      }

      return end;
    }
}
