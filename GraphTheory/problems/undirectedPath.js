/*

const edges=[
    ['b','a'],
    ['c','a'],
    ['b','c'],
    ['q','r'],
    ['q','s'].
    ['q','u'],
    ['q','t']
]

const graph={
    b:[a,c],
    a:[b,c],
    c:[a,b]
}

loop => check if key does not exist,then add key => push both nodes 

wirte a function,undirectedpath,that takes in an array of edges for an undirected graph and two nodes.

after that you can find and node path etc.
take care of cyclic via visited technique.

*/

function createGraph(edges) {
    const graph = {}

    for (const edge in edges) {
        const [a, b] = edge
        if (!(a in graph)) {
            graph[a] = []
        }

        if (!(b in graph)) {
            graph[b] = []
        }

        graph[a].push[b]
        graph[b].push[a]
    }
    return graph
}

// find a path from start to est-key

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

function findPath(edges, start, dest) {
    const graph = createGraph(edges);
    return hasPathRec(graph, start, dest)
}