


const depthirstTraversal=(root)=>{
    if(root===null){
        return 'root is null'
    }

    const values=[]
    const stack=[root]

    while(stack.length>0){
        const node =stack.pop()
        values.push(node.key)

        if(node.right !==null){
            stack.push(node.right)
        }

        if(node.left !== null){
            stack.push(node.left)
        }
    }
    return values
}

// depth first taversal using recurrsive way
const recurssiveDepthFirstTraversal=(root)=>{
    if(root===null){
        return //
    }

    const leftValues=recurssiveDepthFirstTraversal(root.left)
    const rightValues=recurssiveDepthFirstTraversal(root.right)

    return [root.key,leftValues,rightValues] // [a,[b,c,d],[e,f,g]]

    // return [root.key,...leftValues,...rightValues] // [a,b,c,d,e,f,g]
}