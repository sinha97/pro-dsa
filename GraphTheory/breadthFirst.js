const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

//=== Traversing a graph


// in breadthfirstsearch we first take care of all neighbour of node and then check should we already visited that node or not
function breadthFS(graph, start) {
    const queue = [start]
    const visited = new Set()

    while (queue.length > 0) {
        const node = queue.shift()
        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }
}