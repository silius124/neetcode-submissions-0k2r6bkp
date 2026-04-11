class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length){
        return false
      }
      const S = s.split('').toSorted()
      const T = t.split('').toSorted()

      for(let i = 0; i<S.length;i++){
        if(S[i] !== T[i]){
            return false
        }
      }

      return true
    }
}
