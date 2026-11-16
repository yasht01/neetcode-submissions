class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pairArr = position.map((element, index) => [element, speed[index]]);

        const sortedArr = pairArr.sort((a, b) => b[0] - a[0]);
        const stack = [];

        for (let [pos, speed] of sortedArr) {
            stack.push((target - pos) / speed);

            if (stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }
        }
        
        return stack.length;
    }
}
