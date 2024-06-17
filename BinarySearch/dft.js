


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