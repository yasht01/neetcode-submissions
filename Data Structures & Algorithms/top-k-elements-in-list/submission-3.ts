class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
      const frequencyBucket: number[][] = Array.from(
        { length: nums.length + 1 },
        () => []
      );
      
      const frequencyMap: Record<number, number> = {};

      for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      }

      for (let [key, value] of Object.entries(frequencyMap)) {
        frequencyBucket[value].push(parseInt(key));
      }

      let result: number[] = [];

      for (let index = frequencyBucket.length - 1; index > 0; index--) {
        if (frequencyBucket[index].length === 0) continue;
        if (result.length >= k) break;        
        frequencyBucket[index].map((value) => result.push(value));
      }

      return result;
    }
}
