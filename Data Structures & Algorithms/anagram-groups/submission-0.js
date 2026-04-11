class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (let s of strs){
            const count = new Array(26).fill(0)
            
            for (let ch of s){
                count[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            res[count] = [...res[count] || [], s]
        }

        return Object.values(res)
    }
}
