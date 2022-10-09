class Node {
    constructor(value) {
        this.value = value; // value of node
        this.next = null; // pointer to next node
        this.prev = null; // pointer to previous node
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value, // value of node
            next: null, // pointer to next node
            prev: null // pointer to previous node
        }
        this.tail = this.head; // pointer to last node in list
        this.length = 1; // length of linked list (number of nodes)
    }

    // add node to end of list
    append(value) {
        const newNode = new Node(value); // create new node with value

        newNode.prev = this.tail; // point new node to current tail
        this.tail.next = newNode; // point current tail to new node
        this.tail = newNode; // set new node as tail of list
        this.length++; // increment length

        return this; // return linked list
    }

    // prepend node to beginning of list
    prepend(value) {
        const newNode = new Node(value); // create new node with value

        newNode.next = this.head; // point new node to current head
        this.head.prev = newNode; // point current head to new node
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
        const follower = leader.next; // store pointer to node at index

        leader.next = newNode; // point leader to new node
        newNode.prev = leader; // point new node to leader
        newNode.next = follower; // point new node to node at index
        follower.prev = newNode; // point node at index to new node
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
        const leader = this.traverseToIndex(index - 1); // traverse to node before index
        const unwantedNode = leader.next; // store pointer to node at index
        const follower = unwantedNode.next; // store pointer to node after index

        leader.next = follower; // point leader to node after index
        follower.prev = leader; // point node after index to leader
        this.length--; // decrement length

        return this; // return linked list
    }

    // search linked list
    search(value) {
        let currentNode = this.head; // set current node to head

        while (currentNode !== null) { // traverse through linked list
            if (currentNode.value === value) { // check if current node has value
                return currentNode; // return current node
            }
            currentNode = currentNode.next; // set current node to next node in list
        }

        return null; // return null if value is not found
    }

    // print linked list
    printList() {
        const array = []; // initialize array
        let currentNode = this.head; // set current node to head

        while (currentNode !== null) { // traverse through linked list
            array.push(currentNode.value); // add value of current node to array
            currentNode = currentNode.next; // set current node to next node in list
        }

        return array; // return array
    }
}