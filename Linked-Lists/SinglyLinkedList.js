class Node {
    constructor(value) {
        this.value = value; // value of the node
        this.next = null; // pointer to the next node
    }
}

class mySinglyLinkedList {
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

    // prepend node to beginning of list
    prepend(value) {
        const newNode = new Node(value); // create new node with value

        newNode.next = this.head; // point new node to current head
        this.head = newNode; // set new node as head of list
        this.length++; // increment length

        return this; // return linked list
    }

    // insert node at index
    insert(index, value) {
        if (index >= this.length) { // check if index is out of bounds
            return this.append(value); // append to end of list
        }

        const newNode = new Node(value); // create new node with value
        const leader = this.traverseToIndex(index - 1); // traverse to node before index
        const holdingPointer = leader.next; // store pointer to node at index

        leader.next = newNode; // point leader to new node
        newNode.next = holdingPointer; // point new node to node at index
        this.length++; // increment length

        return this; // return linked list
    }

    traverseToIndex(index) {
        let counter = 0; // initialize counter to 0
        let currentNode = this.head; // set current node to head

        while (counter !== index) { // traverse to node at index
            currentNode = currentNode.next; // set current node to next node in list
            counter++; // increment counter by 1
        }

        return currentNode; // return node at index
    }

    // remove node at index
    remove(index) {
        if (index >= this.length) { // check if index is out of bounds
            return this; // return linked list
        }

        const leader = this.traverseToIndex(index - 1); // traverse to node before index
        const unwantedNode = leader.next; // store pointer to node at index

        leader.next = unwantedNode.next; // point leader to node after index
        this.length--; // decrement length

        return this; // return linked list
    }

    // reverse linked list
    reverse() {
        if (!this.head.next) { // check if list has only 1 node
            return this; // return linked list
        }

        let first = this.head; // set first to head
        this.tail = this.head; // set tail to head
        let second = first.next; // set second to node after head

        while (second) { // traverse through list
            const temp = second.next; // store pointer to node after second
            second.next = first; // point second to first
            first = second; // set first to second
            second = temp; // set second to node after second
        }

        this.head.next = null; // set pointer of old head to null
        this.head = first; // set head to first

        return this; // return linked list
    }

    // search linked list
    search(value) {
        let currentNode = this.head; // set current node to head

        while (currentNode !== null) { // traverse through list
            if (currentNode.value === value) { // check if value of node is equal to value
                return currentNode; // return node
            }

            currentNode = currentNode.next; // set current node to next node in list
        }

        return null; // return null
    }

    // print linked list
    printList() {
        const array = []; // initialize array
        let currentNode = this.head; // set current node to head

        while (currentNode !== null) { // traverse through list
            array.push(currentNode.value); // add value of node to array
            currentNode = currentNode.next; // set current node to next node in list
        }

        return array; // return array
    }
}

let myLinkedList = new mySinglyLinkedList(1); // create new linked list with value 1

