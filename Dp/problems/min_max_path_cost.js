function maxCountpaths(grid, row = 0, col = 0, memo = {}) {
    
     

    // return the chache result
    if (pos in memo) {
        return memo[pos]
    }

    if (row >= grid.length || col >= grid[0].length
        // || grid[row][col] === 'X'
    ) { //X or wall or snake
        return -Infinity
    }

    // check if you have arrived at given location
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return grid[row][col]
    }

    

    memo[pos] = grid[row][col] + Math.max(countpaths(grid, row + 1, col, memo) + countpaths(grid, row, col + 1, memo))
    return memo[pos]
}