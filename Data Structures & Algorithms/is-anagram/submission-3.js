class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const obj1 = {}
        const obj2 = {}
        for(let i = 0; i < s.length; i++){
            obj1[s[i]] = 1 + (obj1[s[i]] ? obj1[s[i]] : 0)
            obj2[t[i]] = 1 + (obj2[t[i]] ? obj2[t[i]] : 0)
        }

        for(let ch in obj1){
            if(obj1[ch] !== obj2[ch]){
                return false
            }
        }

        return true
    }
}
