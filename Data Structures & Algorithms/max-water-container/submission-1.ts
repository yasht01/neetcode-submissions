class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
      let max2DWater = 0;

      let start = 0;
      let end = heights.length - 1;

      while (start < end) {
        let waterHeld = (Math.min(heights[start], heights[end])) * (end - start);
        max2DWater = Math.max(waterHeld, max2DWater);

        if (heights[start] < heights[end]) {
          start++;
        } else {
          end--;
        }
      }

      return max2DWater;
    }
}
