class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = {}

        for(let num of nums){
            if(!hashmap[num]){
                hashmap[num] = 1
            }else{
                hashmap[num] += 1
            }
        }
        
        const valueArr = [...Object.values(hashmap)]
        const keyArr = [...Object.keys(hashmap)]
        const res = []
        for(let i = 0; i < k; i++){
            let maxNum = Math.max(...valueArr)
            let maxKey = keyArr.find(key => hashmap[key] == maxNum)
            res.push(maxKey)
            valueArr.splice(valueArr.indexOf(maxNum),1)
            keyArr.splice(keyArr.indexOf(maxKey),1)
        }
        return res
    }
}
