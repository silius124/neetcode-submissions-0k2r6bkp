class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const res = new Array(temperatures.length).fill(0)

        for(let i = res.length-1; i >= 0; i--){
            while(stack.length && temperatures[stack[stack.length-1]] <= temperatures[i]){
                stack.pop()
            }
            if(stack.length){
                res[i] = stack[stack.length - 1] - i
            }
            stack.push(i)
        }
        return res
    }
}
