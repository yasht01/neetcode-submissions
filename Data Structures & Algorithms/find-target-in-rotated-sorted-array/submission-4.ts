class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0, right = nums.length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        let pivot = left;
        let leftAns = this.binary_search(nums.slice(0, pivot), target);
        let rightAns = this.binary_search(nums.slice(pivot, nums.length), target);

        if (leftAns !== - 1) {
            return leftAns;
        } else if (rightAns !== -1) {
            return pivot + rightAns;
        } else return -1;
    }

    binary_search(arr: number[], target: number) : number {
        let start = 0, end = arr.length - 1;
        
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);

            if (arr[mid] === target) {
                return mid;
            }
            else if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            }
        }

        return -1;
    }
}
