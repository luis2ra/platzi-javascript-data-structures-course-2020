class Node {
    constructor(value) {
        this.value = value; // set the value of the node
        this.next = null; // set the next property of the node to null
    }
}

class Queue {
    constructor() {
        this.first = null; // set the first property of the queue to null
        this.last = null; // set the last property of the queue to null
        this.length = 0; // set the length property of the queue to 0
    }

    // peek - returns the first element of the queue
    peek() {
        return this.first; // return the first property of the queue
    }

    // enqueue - adds an element to the end of the queue
    enqueue(value) {
        const newNode = new Node(value); // create a new node

        if (this.length === 0) { // if the queue is empty
            this.first = newNode; // set the first property of the queue to the new node
            this.last = newNode; // set the last property of the queue to the new node
        } else {
            this.last.next = newNode; // set the next property of the last node to the new node
            this.last = newNode; // set the last property of the queue to the new node
        }

        this.length++; // increment the length of the queue

        return this; // return the queue
    }

    // dequeue - removes the first element of the queue
    dequeue() {
        if (!this.first) { // if the queue is empty
            return null; // return null
        }

        if (this.first === this.last) { // if the first and last properties of the queue are the same
            this.last = null; // set the last property of the queue to null
        }

        this.first = this.first.next; // set the first property of the queue to the next node
        this.length--; // decrement the length of the queue

        return this; // return the queue
    }

    // front - returns the first element of the queue
    front() {
        return this.first; // return the first property of the queue
    }

    // rear - returns the last element of the queue
    rear() {
        return this.last; // return the last property of the queue
    }

    // isEmpty - returns true if the queue is empty, false otherwise
    isEmpty() {
        if (this.length === 0) { // if the queue is empty
            return true; // return true
        }

        return false; // return false
    }
}

const myQueue = new Queue(); // create a new queue