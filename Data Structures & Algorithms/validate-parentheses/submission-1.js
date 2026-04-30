class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const obj = { "{": "}", "[": "]", "(": ")" };

        for (let ch of s) {
            if(obj[ch]){
                stack.push(ch)
            }else if(obj[stack.at(-1)] === ch) {
                stack.pop()
            }else{
                return false
            }
        }

        return stack.length === 0 ? true: false
    }
}
