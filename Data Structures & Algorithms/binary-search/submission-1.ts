class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
      let start = 0, end = nums.length;

      while (start < end) {
        const mid =  start + Math.floor((end - start) / 2);
        console.log(mid);

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) end = mid;
        else start = mid + 1;
      }

      return -1;
    }
}
