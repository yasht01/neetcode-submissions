class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
      const prefixMultArrayFromStart = Array.from({length: nums.length}, () => 1);
      const prefixMultArrayFromEnd = Array.from({length: nums.length}, () => 1);

      let productFromStart = 1;
      for (let index = 1; index < nums.length; index++) {
        productFromStart *= nums[index - 1];
        prefixMultArrayFromStart[index] = productFromStart;
      }

      let productFromEnd = 1;
      for (let index = nums.length - 2; index >= 0; index--) {
        productFromEnd *= nums[index + 1];
        prefixMultArrayFromEnd[index] = productFromEnd;
      }

      const result = Array.from({length: nums.length}, () => 1);

      for (let index = nums.length - 1; index >= 0; index--) {
        result[index] = prefixMultArrayFromStart[index] * prefixMultArrayFromEnd[index];
      }

      return result;
    }
}
