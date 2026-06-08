class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
      let max2DWater = 0;

      for (let start = 0; start < heights.length - 1; start++) {
        for (let end = start + 1; end < heights.length; end++) {
          let waterHeld = (Math.min(heights[start], heights[end])) * (end - start);
          max2DWater = Math.max(max2DWater, waterHeld);
        }
      }

      return max2DWater;
    }
}
