class MinStack {
    private stack: number[] = [];
    private mins: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
      this.stack.push(val);

      if (this.mins.length === 0) {
        this.mins.push(val);
      } else {
        this.mins.push(Math.min(val, this.mins[this.mins.length - 1]));
      }
    }

    /**
     * @return {void}
     */
    pop(): void {
      this.stack.pop();
      this.mins.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
      return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
      return this.mins[this.mins.length - 1];
    }
}
