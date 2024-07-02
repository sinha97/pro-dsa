/*
Given two node (start and dest) in a directed acyclic graph (DAG),return true if there is a directed path from start to dest,otherwise return false.

Example 1:

Input: start = 1,dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.

Example 2:

Input: start = 1,dest = 4
Output: false
Explanation: There is no path from 1 to 4

*/


// Note: when we talk about cyclic graph then the concept of visited must be there 

/// depthfirst search approach
function hasPathDfS(graph, start, dest) {
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop();

        // if node is the destination then we truen true
        if (node === dest) {
            return true
        }

        // check if node is visited or not
        if (!visited.has(node)) {
            visited.add(node)

            for (const neighbour of graph[node]) {
                stack.push(neighbour)
            }
        }
    }
    return false
}


// breadth first search approach

function hasPathBFS(graph, start, dest) {
    const queue = [start]
    const visited = new Set()

    while (queue.length > 0) {
        const node = queue.shift()
        if (node === dest) return true
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                queue.push(neighbour)
            }
        }
    }
    return false
}

// recurssive approach

function hasPathRec(graph, start, dest, visited = new Set()) {
    if (start === dest) return true

    if (visited.has(start)) {
        return false
    }
    visited.add(start)

    for (const neighbour of graph[start]) {
        if (hasPathRec(graph, neighbour, dest) === true) {
            return true
        }
    }
    return false
}