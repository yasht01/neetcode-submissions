class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = 0;
        let fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if (slow === fast) break;
        }

        let start = 0;

        while (start !== slow) {
            start = nums[start];
            slow = nums[slow];
        }

        return slow;
    }
}
