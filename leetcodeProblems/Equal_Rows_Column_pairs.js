var equalPairs = function (grid) {
    const n = grid.length()
    const rowmap = new Map();
    for (let i = 0; i < n; i++) {
        const rowStr = grid[i].join(',');
        rowmap.set(rowStr, (rowmap.get(rowStr) || 0) + 1)
    }

    let count =0;
    for(let i=0;i<n;i++){
        let colArr=[];
        for(let j=0;j<n;j++){
            colArr.push(grid[j][i])
        }
        const colStr = colArr.join(',');
        if(rowmap.has(colStr)){
            count +=rowmap.get(colStr)
        }
    }
    return count
};