function countpaths(grid, row = 0, col = 0, memo = {}) {
    const pos = row + "," + col

    if (row >= grid.length || col >= grid[0].length  || grid[row][col] === 'X') { //X or wall or snake
        return 0
    }

    // check if you have arrived at given location
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return 1
    }

    if (pos in memo) {
        return memo[pos]
    }

    memo[pos] = countpaths(grid, row + 1, col, memo) + countpaths(grid, row, col + 1, memo)
    return memo[pos]
}