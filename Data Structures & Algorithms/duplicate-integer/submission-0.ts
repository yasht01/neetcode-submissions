class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let dictionary: Record<number, boolean>  = {};

        for (let number of nums) {
            if (dictionary[number] === true) {
                return true;
            } else {
                dictionary[number] = true;
            }
        }

        return false;
    }
}
