class Stack {
    constructor() {
        this.stack = []
    }


    push(data) {
        this.stack.push(data)
    }

    pop() {
        this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    clear() {
        this.stack = []
    }

    contains(element) {
        return this.stack.includes(element)
    }

    reverse(){
        this.stack.reverse()
    }

    printStack(){
        let str =''
        for(let i=0;i<this.stack.length;i++){
            str += this.stack[i] + '\n'
        }
        return str
    }
}