class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        const output = new Array(len)

        var prefix = 1
        for (let i = 0; i < len; i++){
            output[i] = prefix
            prefix *= nums[i]
        }
        var postfix = 1
        for(let i = len - 1; i >= 0; i--){
            output[i] *= postfix
            postfix *= nums[i]
        }        
        return output
    }


}
