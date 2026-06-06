class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    private static readonly EMPTY_ARRAY_ELEMENT_IDENTIFIER = -1001;

    topKFrequent(nums: number[], k: number): number[] {
      const frequencyBucket: number[][] = Array(nums.length + 1).fill([Solution.EMPTY_ARRAY_ELEMENT_IDENTIFIER]);

      const frequencyMap: Record<number, number[]> = {};

      for (let [index, value] of nums.entries()) {
        if (frequencyMap[value]) {
          frequencyMap[value].push(index);
        } else {
          frequencyMap[value] = [index];
        }
      }

      for (let [key, value] of Object.entries(frequencyMap)) {
        if (frequencyBucket[value.length][0] === Solution.EMPTY_ARRAY_ELEMENT_IDENTIFIER) {
          frequencyBucket[value.length] = [parseInt(key, 10)];
        } else {
          frequencyBucket[value.length].push(parseInt(key, 10));
        }
      }

      let result: number[] = [];

      for (let index = frequencyBucket.length - 1; index >= 0; index--) {
        if (frequencyBucket[index][0] === Solution.EMPTY_ARRAY_ELEMENT_IDENTIFIER) continue;
        if (result.length >= k) break;
        
        frequencyBucket[index].map((value) => result.push(value));
      }

      return result;
    }
}
