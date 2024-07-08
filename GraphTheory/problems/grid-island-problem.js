// const grid=[
//     [1,0,0,1,0],
//     [1,0,0,1,1],
//     [0,1,0,1,0],
//     [0,0,0,0,0],
//     [0,0,1,1,1],
// ]

// const grid1=[
//     [W,L,L,W,L],
//     [W,L,L,W,W],
//     [L,W,L,W,L],
//     [L,L,L,L,L],
//     [L,L,W,W,W],
// ]

// out of bound check
// Grid=[[],[],[],[],[]]
// Grid.length=4
// Row -> 0<=Row<grid.length
// Col -> 0<=Col<grig[0].length ("Pick any column")

function isIslandCount(grid) {
    const rows = grid.length;
    const cols = grid[0].length

    const visited = new Set()
    const count = 0

    function dfs(r, c) {
        const pos = r + "," + c

        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "W" || visited.has(pos)) {
            return
        }

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
                count++
                dfs(r, c)
            }
        }
    }

    return count
}