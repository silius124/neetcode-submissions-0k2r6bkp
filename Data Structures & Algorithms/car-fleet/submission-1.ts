class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const carMap = position.map((p, i) => [p, speed[i]]).sort((a,b) => b[0]-a[0])
    
        const stack = []

        for(let [position, speed] of carMap){
            let time = (target - position) / speed
            stack.push(time)
            if(stack.length >= 2 && stack[stack.length - 2] >= stack[stack.length-1]){
                stack.pop()
            }
        }

        return stack.length
    }
}
