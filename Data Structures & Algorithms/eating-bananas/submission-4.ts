class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);

        let result = right;

        while (left <= right) {
            let k = Math.floor((right + left) / 2);
            let totalTime = 0;

            for (const pile of piles) {
                totalTime += Math.ceil(pile / k);
            }

            if (totalTime <= h) {
                result = k;
                right = k - 1;
            } else {
                left = k + 1;
            }
        }

        return result;
    }
}
