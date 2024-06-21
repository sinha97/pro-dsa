
// breadth first solution

const treeSumProblemWithBreadthFirst = (root) => {
    if (root === null) return 0

    const queue = [root]
    let sum = 0

    while (queue.length > 0) {
        const node = queue.shift()
        sum += node.key

        if (node.left !== null) {
            queue.push(node.left)
        }

        if (node.rigth !== null) {
            queue.push(node.right)
        }
    }
    return sum
}

// depth search solution

const treeSum = (root)=>{
    if(root===null){
        return 0
    }

    return root.key + treeSum(node.left) + treeSum(node.right) // this is recurrsion call
}