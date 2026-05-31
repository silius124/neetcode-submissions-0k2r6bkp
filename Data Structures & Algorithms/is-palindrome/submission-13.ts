class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let sTrim = s.trim().toLowerCase().replaceAll(new RegExp("[?!'':;`,\\s.]", "g"), "");
        let left = 0
        let right = /[?!.]/.test(sTrim[sTrim.length-1]) ? sTrim.length - 2 : sTrim.length - 1

        while (left < right){
            if(sTrim[left] !== sTrim[right]) return false
            left++
            right--
        }
        return true
    }
}
