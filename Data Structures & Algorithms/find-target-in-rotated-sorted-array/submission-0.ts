class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let original = [];
        let it = 0;

        while (it < nums.length) {
            
            if (it !== 0 && nums[it - 1] > nums[it]) {
                break;
            }

            it++;
        }

        original = [...nums.slice(it, nums.length), ...nums.slice(0, it)];

        let start = 0, end = original.length - 1;
        let result = false;

        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);

            if (original[mid] < target) {
                start = mid + 1;
            } else if (original[mid] > target) {
                end = mid - 1;
            } else {
                result = true;
                break;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target && result) {
                return i;
            }
        }

        return -1;
    }
}
