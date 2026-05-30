class MinStack {
    stack: [number, number][]
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(typeof val !== 'number') val = null
        let currentMin = this.stack.length === 0 ? val : Math.min(val, this.getMin())
        this.stack[this.stack.length] = [val, currentMin]
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.length = this.stack.length - 1
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1][0]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length-1][1]
    }
}
