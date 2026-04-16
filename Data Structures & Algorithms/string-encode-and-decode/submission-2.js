class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""

        for(let str of strs){
            res += `${str.length}#` + str
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
 decode(str) {
  const res = [];
    let i = 0
  while(i < str.length) {
    let j = i;
    while (str[j] != "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j));
    res.push(str.substring(j + 1, j + 1 + length));
    i = j + length + 1;
  }
  return res;
}
}
