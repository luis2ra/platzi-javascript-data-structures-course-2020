class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // peek - returns the top element of the stack
    peek() {
        return this.top;
    }

    // push - adds an element to the top of the stack
    push(value) {
        const newNode = new Node(value); // create a new node

        if (this.length === 0) {
            this.top = newNode; // if the stack is empty, set the top to the new node
            this.bottom = newNode; // if the stack is empty, set the bottom to the new node
        } else {
            const holdingPointer = this.top; // create a holding pointer to the top of the stack
            this.top = newNode; // set the top of the stack to the new node
            this.top.next = holdingPointer; // set the next property of the new node to the holding pointer
        }

        this.length++; // increment the length of the stack
        return this; // return the stack
    }

    // pop - removes the top element of the stack
    pop() {
        if (!this.top) { // if the stack is empty
            return null; // return null
        }

        if (this.top === this.bottom) { // if the top and bottom of the stack are the same
            this.bottom = null; // set the bottom to null
        }

        const holdingPointer = this.top; // create a holding pointer to the top of the stack

        this.top = this.top.next; // set the top of the stack to the next node
        this.length--; // decrement the length of the stack

        return this; // return the stack
    }

    // isEmpty - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.length === 0) { // if the stack is empty
            return true; // return true
        }

        return false; // otherwise return false
    }
}

const myStack = new Stack(); // create a new stack