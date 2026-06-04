class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i, j;

        let indexMaps: Record<number, number> = {};

        for (const [index, _] of nums.entries()) {
            indexMaps[nums[index]] = index;
        }

        for (let [index, value] of nums.entries()) {
            if (indexMaps[target - value] !== undefined && indexMaps[target - value] !== index) {
                i = index;
                j = indexMaps[target - value];
            }
        }

        return [i, j];
    }
}
