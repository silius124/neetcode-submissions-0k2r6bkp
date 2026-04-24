class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const square = new Map()

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[r].length; c++){
                if(board[r][c] === '.') continue
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if(rows.get(r) && rows.get(r).has(board[r][c]) || cols.get(c) && cols.get(c).has(board[r][c])
                || square.get(squareKey) && square.get(squareKey).has(board[r][c])) return false

                if(!rows.get(r)) rows.set(r, new Set())
                if(!cols.get(c)) cols.set(c, new Set())
                if(!square.get(squareKey)) square.set(squareKey, new Set())

                rows.get(r).add(board[r][c])
                cols.get(c).add(board[r][c])
                square.get(squareKey).add(board[r][c])
            }
        }
        return true

    }
}
