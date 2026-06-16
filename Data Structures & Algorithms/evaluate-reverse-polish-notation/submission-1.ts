class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
      let result = 0;

      const stack = [];

      for (let token of tokens) {
        console.log(stack);
        console.log(token);

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
            const operation = b / a;
            stack.push(operation > 0 ? Math.floor(operation) : Math.ceil(operation));
          }
        } else {
          stack.push(parseInt(token));
        }
      }

      return stack.pop();
    }
}
