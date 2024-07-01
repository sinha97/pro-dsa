const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

//=== Traversing a graph

// iterative approach
function defthFSIterative(graph, start) {
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop()
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                // Perform operations on neighbour
                if (!visited.has(neighbour)) {
                    stack.push(neighbour)
                }
            } 
        }
    }
}


// recurssive approach
function depthFSRecurssive(graph, start, visited = new Set()) {
    if (!visited.has(start)) {
        visited.add(start)
        for (const neighbour of graph[start]) {
            depthFSRecurssive(graph, neighbour, visited)
        }
    }
}
