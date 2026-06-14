class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
      let stack: number[] = [];

      for (let op of operations) {
        console.log(stack);

        if (op === "C") {
          stack.pop();
        } else if (op === "D") {
          const a = stack.pop();
          const result = a * 2;

          stack.push(a);
          stack.push(result);
        } else if (op === "+") {
          const a = stack.pop();
          const b = stack.pop();
          const result = a + b;

          stack.push(b);
          stack.push(a);
          stack.push(result);
        } else {
          stack.push(parseInt(op));
        }
      }

      let sum = 0;

      for (let num of stack) {
        sum += num;
      }

      return sum;
    }
}
