class QueueStruct {
    constructor() {
        this.queue = [] // initialize the queue variable with empty []. 
    }

    // add data in the queue
    enqueue(data) {
        this.queue.push(data)
    }

    // remove data from the queue.
    // we use shift() here because it remove 1st element from array  and shift all elements to respected position.
    dequeue() {
        if (this.isEmpty()) {
            return "Queue has no data"
        }
        return this.queue.shift()
    }

    // check whether queue is empty or not.
    isEmpty() {
        return this.queue.length === 0
    }

    // return first element of the queue
    peek() {
        if (this.isEmpty()) {
            return "Queue has no data"
        }
        return this.queue[0]
    }

    // return the size of the queue
    size() {
        this.queue.length
    }

    // empty the queue
    clear() {
        this.queue = []
    }

    // print the value of th queue
    printQueue() {
        let str = '';
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + '\n'
        }
        return str
    }

}

// example

let exampleQueue = new QueueStruct();
exampleQueue.enqueue(22);
exampleQueue.enqueue(24);
exampleQueue.enqueue(26);
exampleQueue.enqueue(28);
exampleQueue.enqueue(30);

console.log('exampleQueue', exampleQueue)
