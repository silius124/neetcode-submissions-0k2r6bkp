class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        const output = new Array(len);

        for (let i = 0; i < len; i++) {
            let prod = 1
            for(let j = 0; j < len; j++){
                if(i !== j){
                    prod *= nums[j]
                }
            }
            output[i] = prod
        }
        return output;
    }

}
