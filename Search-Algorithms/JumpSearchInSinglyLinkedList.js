class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value, // value of node (1)
            next: null // pointer to next node
        }
        this.tail = this.head; // pointer to last node in list
        this.length = 1; // length of linked list (number of nodes)
    }

    // add node to end of list
    append(value) {
        const newNode = new Node(value); // create new node with value

        this.tail.next = newNode; // point current tail to new node (2)
        this.tail = newNode; // set new node as tail of list
        this.length++; // increment length

        return this; // return linked list
    }

    // search for node at index
    search(index) {
        let counter = 0; // initialize counter to 0
        let currentNode = this.head; // set current node to head

        while (counter !== index) { // traverse to node at index
            currentNode = currentNode.next; // set current node to next node in list
            counter++; // increment counter by 1
        }

        return currentNode; // return node at index
    }

    // print linked list
    printList() {
        const array = []; // initialize array
        let currentNode = this.head; // set current node to head

        while (currentNode !== null) { // traverse through linked list
            array.push(currentNode.data); // push node data to array
            currentNode = currentNode.next; // set current node to next node in list
        }

        return array; // return array
    }
}

class JumpSearchInSinglyLinkedList {
    constructor (value, size, array) {
        this.value = value;
        this.size = size;
        this.array = array;
    }

    search () {
        let step = Math.floor(Math.sqrt(this.size)); // calculate step size
        let prev = 0; // initialize previous index to 0

        while (this.array[Math.min(step, this.size) - 1] < this.value) { // while the value at the step is less than the value
            prev = step; // set previous index to step
            step += Math.floor(Math.sqrt(this.size)); // increment step by step size

            if (prev >= this.size) { // if previous index is greater than or equal to the size
                return -1; // return -1
            }
        }

        while (this.array[prev] < this.value) { // while the value at the previous index is less than the value
            prev++; // increment previous index by 1

            if (prev === Math.min(step, this.size)) { // if previous index is equal to the step
                return -1; // return -1
            }
        }

        if (this.array[prev] === this.value) { // if the value at the previous index is equal to the value
            return prev; // return the previous index
        }

        return -1; // return -1
    }
}

const jumpSearchInSinglyLinkedListObject = new JumpSearchInSinglyLinkedList(3, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(jumpSearchInSinglyLinkedListObject.search()); // print the index of the element
