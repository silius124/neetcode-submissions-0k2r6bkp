class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int l = 0;
        int r = matrix.length - 1;

        for(int i = 0; i < matrix.length; i++){
            boolean res = searchElement(matrix[i], target);
            if(res) return res;
        }
        return false;
    }

    private boolean searchElement(int[] arr, int target){
        int l = 0;
        int r = arr.length;

        while((r-l) > 1){
            int m = l + (r-l) / 2;
            if(arr[m] > target){
                r = m;
            }else{
                l = m;
            }
        }

        return arr[l] == target;
    }
}
