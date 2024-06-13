// Initalize a node first,here myLinkedListNode is a node.

class myLinkedListNode {
    constructor(data, next = null) { // inital next value should be null
        this.data = data;
        this.next = next
    }
}

// initialize the linkedlist
class LinkedList {
    constructor() {
        this.head = null // here head is the first element of the linkedlist array
    }
}

// add data at the beginning
LinkedList.prototype.addAtBeginning = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
}

// add data at the end
LinkedList.prototype.addAtLast = function (data) {
    const newNode = new Node(data)
    if (!this.node) {
        this.head = newNode;
        return
    }
    let last = this.head
    while (last.next) {
        last = last.next
    }

    last.next = newNode;
}

// add node at a given node
LinkedList.prototype.addAtGivenNode = function (prevNode, data) {
    if (!prevNode) {
        console.log('Prev node can not be null');
        return
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// delete the first node 
LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return
    }
    this.head = this.head.next
}

//delete the last node
LinkedList.prototype.deleteLastNode = function () {
    // if head=null then it means that the there is no linkedlist
    if (!this.head) {
        return
    }

    // if head.next is null then just assign the head to null to delete the node 
    if (!this.head.next) {
        this.head = null
        return
    }


    let sLast = this.head;
    while (sLast.next.next) { // continously check the sLast.next.next,if its gives value then just increment the sLast to sLat.next
        sLast = sLast.next
    }
    sLast.next = null

}

// delete a node on a given key
LinkedList.prototype.deleteNodeByKet = function (key) {

    // if list is empty
    if (!this.head) {
        console.log('list is empty')
        return
    }

    // data found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }

    // check each node that matches with  given key
    let current = this.head
    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }

    // no node is found with matching key
    console.log('No node is found with matching key :', key)
}

// Search operation
LinkedList.prototype.searchNode = function (key) {
    let current = this.head
    while (current) {
        if (current.data === key) {
            return true
        }
    }

    return false
}