// Initialize a node first,here myLinkedListNode is a node.
class myDoublyLinkedListNode {
    constructor(data, next = null, prev = null) { // inital next & prev value should be null
        this.data = data;
        this.next = next;
        this.prev = prev
    }
}

// Initialize the DoublyLinkedList
class DoublyLinkedList {
    constructor() {
        // here head and tail signifies that the linkedlist is empty
        this.head = null;
        this.tail = null
    }
}

// Insert at start in doublyLinkedList
DoublyLinkedList.prototype.insertAtStart = function (data) {
    const newNode = new myDoublyLinkedListNode(data, this.head, null)

    if (this.head !== null) {
        this.head.prev = newNode
    }
    this.head = newNode
    if (this.tail === null) {
        this.tail = newNode
    }
}

//insert at the end in doublylinkedlist
DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new myDoublyLinkedListNode(data, null, this.tail)

    if (this.tail !== null) {
        this.tail.next = newNode
    }

    this.tail = newNode
    if (this.head === null) {
        this.head = newNode
    }
}

// insert at a given node
DoublyLinkedList.prototype.insertAtNode = function (data, prevNode) {
    // if prevNode is null
    if (prevNode === null) {
        console.log('invalid prev node')
        return
    }

    // create a new node
    const newNode = new Node(data, prevNode.next, prevNode);

    if (prevNode.next !== null) {
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode

    // tail 
    if (newNode.next === null) {
        this.tail = newNode
    }
}