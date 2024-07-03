function biggestisland(graph) {
    const visited = new Set()
    let largest = 0

    function dfs(node) {
        if (visited.has(node)) {
            return 0 //node is visited then return 0
        }
        visited.add(node) //add node if not visited
        let size = 1 //and increment the size by 1

        //find neighbour
        for (const neighbour in graph[node]) {
            size += dfs(neighbour)
        }
        return size
    }

    // iterate over graph
    for (const node in graph) {
        if (!visited.has(node)) {
            const componentSize = dfs(node)
            if (componentSize > largest ) {
                largest = componentSize
            }
        }
    }
}