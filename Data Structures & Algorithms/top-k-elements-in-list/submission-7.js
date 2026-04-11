class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const obj = {}
       const freq = Array.from({length: nums.length + 1}, ()=>[])

       for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }else{
            obj[num] += 1
        }
       }

       for (let [key,value] of Object.entries(obj)){
        freq[value].push(key)
       }

       const res = []
       for(let i = freq.length-1; i >= 0; i--){
        for(let j of freq[i]){
            res.push(j)
            if (res.length === k){
                return res
            }
        }
       }
    }
}
