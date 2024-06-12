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
LinkedList.prototype.addAtGivenNode=function(prevNode,data){
    if(!prevNode){
        console.log('Prev node can not be null');
        return
    }

    const newNode =new Node (data,prevNode.next)
    prevNode.next = newNode
}

// delete the first node 
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return
    }
    this.head= this.head.next
}