class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxRes = 0;

        for (let left = 0; left < heights.length; left++) {
            let right = heights.length - 1 
            while (left < right) {
                maxRes = Math.max(maxRes, Math.min(heights[left], heights[right]) * (right - left));
                right--;
            }
        }

        return maxRes;
    }
}
