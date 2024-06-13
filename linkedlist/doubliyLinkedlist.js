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
    const newNode = new Node(data, this.head, null)

    if (this.head !== null) {
        this.head.prev = newNode
    }
    this.head = newNode
    if (this.tail === null) {
        this.tail = newNode
    }
}