class MinStack {
    stack: any[]
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(typeof val !== 'number') val = null
        this.stack[this.stack.length] = val
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
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = Infinity 
        for(let el of this.stack){
            if((typeof el === 'number') && el < min){
                min = el
            }
            else continue
        }

        return min
    }
}
