class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        for(let [i, el] of nums.entries()){
            let diff = target - el
            if(diff in obj){
                return [obj[diff], i]
            }
            obj[el] = i
        }
        return

    }
}
