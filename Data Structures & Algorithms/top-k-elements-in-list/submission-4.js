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
        
        const sortedHashmap = Object.entries(hashmap).sort((a,b) => b[1] - a[1])
        return sortedHashmap.slice(0,k).map(item => item[0])
    }
}
