// implementation of BinarySearch tree
class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // insert new key to the tree
    insert(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode
        } else {

            this.insertNode(this.root, newNode)
        }
    }

    // check the given key is from left and right value.
    insertNode(node, newNode) {// node = root node
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    //Deletion in binary search tree
    delete(key) {
        this.root = this.deleteNode(this.root, key)
    }

    // inorder-successor
    deleteNode(node, key) { // node -> root
        if (node === null) {
            return null
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        } else {
            if (node.left === null && node.right === null) {
                return null
            } else if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            } else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
    }

    //find the smaller node on the rightside
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left
        }
        return node
    }


    //TODO: : make inorder-predecessor


    // inorder traversal 
    inOrderTraversal() {
        const result = []
        this.inorder(this.root, result)
        return result
    }

    inorder() {
        if (node !== null) {
            this.inorder(node.left, result)
            result.push(node.key)
            this.inorder(node.right, result)
        }
    }

    // preOrderTraversal
    preOrderTraversal() {
        const result = []
        this.preorder(this.root, result)
        return result
    }

    preorder() {
        if (node !== null) {
            result.push(node.key)
            this.preorder(node.left, result)
            this.preorder(node.right, result)
        }
    }

    // postorder traversal

    postOrderTraversal() {
        const result = []
        this.postorder(this.root, result)
        return result
    }

    postorder() {
        if (node !== null) {
            this.postorder(node.left, result)
            this.postorder(node.right, result)
            result.push(node.key)
        }
    }
} 