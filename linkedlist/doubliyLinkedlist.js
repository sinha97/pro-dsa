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

// Delete the first node
DoublyLinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return
    }

    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}

// Delete the last node
DoublyLinkedList.prototype.deleteLastNode = function () {
    if (!this.tail) {
        console.log('list is empty');
        return
    }

    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

// Reverse a doubly linked list
DoublyLinkedList.prototype.reverseLinkedlist = function () {
    let current = this.head
    let temp = null
    while (current != null) {
        // swapping
        temp = current.prev
        current.prev = current.next
        current.next = temp
        // move to next node
        current = current.prev
    }

    if (temp != null) {
        this.tail = this.head
        this.head = temp.prev
    }
}