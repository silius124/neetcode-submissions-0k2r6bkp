class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxRes = 0;
        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            maxRes = Math.max(Math.min(heights[l], heights[r]) * (r - l), maxRes);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxRes;
    }
}
