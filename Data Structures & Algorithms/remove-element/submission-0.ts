class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
      let start = 0, end = nums.length - 1;

      while (end >= 0) {
        if (nums[end] === val) end--;
        else break;
      }

      while (start < end) {
        if (nums[start] !== val) {
          start++;
        } else {
          let temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;
          start++;
          end--;

          while (end >= 0) {
            if (nums[end] === val) end--;
            else break;
          }
        }
      }

      console.log(nums);

      let k = 0;

      for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] !== val) {
          k++;
        } else {
          break;
        }
      }

      return k;
    }
}
