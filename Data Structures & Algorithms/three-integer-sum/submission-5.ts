class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
      if (nums.length < 3) return [];

      let result: number[][] = [];
      const sorted = [...nums].sort((a, b) => a - b);

      for (let i = 0; i < sorted.length - 2; i++) {        
        let j = i + 1;
        let k = sorted.length - 1;

        while (j < k) {
          if (sorted[i] > 0) break;

          if (sorted[i] + sorted[j] + sorted[k] === 0) {
            const tempResult = [sorted[i], sorted[j], sorted[k]];
            const isDuplicate = this.findDuplicate(result, tempResult);
            if (!isDuplicate) result.push(tempResult);
          }

          if (sorted[j] + sorted[k] > -sorted[i]) {
            k--;
          } else {
            j++;
          }
        }
      }

      return result;
    }

    findDuplicate(arr: number[][], newValue: number[]): boolean {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === newValue[0]
            && arr[i][1] === newValue[1]
            && arr[i][2] === newValue[2]) {
          return true;
        }
      }

      return false;
    }
}
