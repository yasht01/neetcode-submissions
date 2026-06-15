class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
      let start = 0;
      let end = matrix.length;

      let potentialRow = -1;

      while (start < end) {
        console.log("start: " + start);
        console.log("end: " + end);
        console.log("potentialRow: " + potentialRow);

        const mid = start + Math.floor((end - start) / 2);

        if (matrix[mid][0] === target) return true;
        else if (matrix[mid][0] > target) end = mid;
        else {
          potentialRow = mid;
          start = mid + 1;
        }
      }

      if (potentialRow === -1) return false;

      const arr = matrix[potentialRow];
      console.log(arr);

      start = 0;
      end = arr.length;

      while (start < end) {
        const mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === target) return true;
        else if (arr[mid] > target) end = mid;
        else start = mid + 1;
      }

      return false;
    }
}
