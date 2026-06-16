class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
      const stack = [];

      for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
          let a = stack.pop();
          let b = stack.pop();

          if (token === "+") {
            stack.push(a + b);
          } else if (token === "-") {
            stack.push(b - a);
          } else if (token === "*" ) {
            stack.push(a * b);
          } else {
            stack.push(Math.trunc(b / a));
          }
        } else {
          stack.push(parseInt(token));
        }
      }

      return stack.pop();
    }
}
