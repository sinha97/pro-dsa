// first we initialise a node class with
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class myLinkedList {
    constructor() {
        this.head = null
    }

    // add node to the list
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode; // here th data is added at the head of the node
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;  // here the data is added at the last of the node
        }
    }

    // Remove a node by value
    remove(data) {
        if (this.head === null) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current !== null && current.data !== data) {
            previous = current;
            current = current.next;
        }

        if (current !== null) {
            previous.next = current.next;
        }
    }

    // Display the linked list
    display() {
        let current = this.head;
        let list = '';
        while (current !== null) {
            list += current.data + ' -> ';
            current = current.next;
        }
        list += 'null';
        console.log(list);
    }
}