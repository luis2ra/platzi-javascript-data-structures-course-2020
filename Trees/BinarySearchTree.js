class Node {
    constructor(value) {
        this.value = value; // set the value of the node
        this.left = null; // set the left property of the node to null
        this.right = null; // set the right property of the node to null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // set the root property of the tree to null
    }

    // insert - inserts a new node into the tree
    insert(value) {
        const newNode = new Node(value); // create a new node

        if (this.root === null) { // if the tree is empty
            this.root = newNode; // set the root property of the tree to the new node
        } else {
            let currentNode = this.root; // create a current node variable and set it to the root of the tree

            while (true) { // loop infinitely
                if (value < currentNode.value) { // if the value is less than the current node's value
                    if (!currentNode.left) { // if the current node's left property is null
                        currentNode.left = newNode; // set the current node's left property to the new node
                        return this; // return the tree
                    }

                    currentNode = currentNode.left; // set the current node to the current node's left property
                } else {
                    if (!currentNode.right) { // if the current node's right property is null
                        currentNode.right = newNode; // set the current node's right property to the new node
                        return this; // return the tree
                    }

                    currentNode = currentNode.right; // set the current node to the current node's right property
                }
            }
        }
    }

    // leaf - returns true if the node is a leaf, false otherwise
    leaf(node) {
        if (!node.left && !node.right) { // if the node's left and right properties are null
            return true; // return true
        }

        return false; // return false
    }

    // root - function that checks if a given node is a root
    root(node) {
        if (node === this.root) { // if the node is the root of the tree
            return true; // return true
        }

        return false; // return false
    }

    // pre-order traversal - visits the root node first, then the left subtree, then the right subtree
    preOrderTraversal(node) {
        if (node) { // if the node exists
            console.log(node.value); // print the node's value
            this.preOrderTraversal(node.left); // traverse the left subtree
            this.preOrderTraversal(node.right); // traverse the right subtree
        }
    }

    // in-order traversal - visits the left subtree first, then the root node, then the right subtree
    inOrderTraversal(node) {
        if (node) { // if the node exists
            this.inOrderTraversal(node.left); // traverse the left subtree
            console.log(node.value); // print the node's value
            this.inOrderTraversal(node.right); // traverse the right subtree
        }
    }

    // post-order traversal - visits the left subtree first, then the right subtree, then the root node
    postOrderTraversal(node) {
        if (node) { // if the node exists
            this.postOrderTraversal(node.left); // traverse the left subtree
            this.postOrderTraversal(node.right); // traverse the right subtree
            console.log(node.value); // print the node's value
        }
    }

    // height - returns the height of the tree
    height(node) {
        if (!node) { // if the node is null
            return 0; // return 0
        }

        return 1 + Math.max(this.height(node.left), this.height(node.right)); // return 1 + the maximum height of the left and right subtrees
    }

    // depth - returns the depth of the node
    depth(node) {
        if (this.root(node)) { // if the node is the root of the tree
            return 0; // return 0
        }

        let currentNode = this.root; // create a current node variable and set it to the root of the tree
        let depth = 0; // create a depth variable and set it to 0

        while (currentNode !== node) { // loop until the current node is the node
            if (node.value < currentNode.value) { // if the node's value is less than the current node's value
                currentNode = currentNode.left; // set the current node to the current node's left property
            } else {
                currentNode = currentNode.right; // set the current node to the current node's right property
            }

            depth++; // increment the depth
        }

        return depth; // return the depth
    }

    // size - returns the number of nodes in the tree
    size(node) {
        if (!node) { // if the node is null
            return 0; // return 0
        }

        return 1 + this.size(node.left) + this.size(node.right); // return 1 + the size of the left subtree + the size of the right subtree
    }

    // leaves - returns the number of leaves in the tree
    leaves(node) {
        if (!node) { // if the node is null
            return 0; // return 0
        }

        if (this.leaf(node)) { // if the node is a leaf
            return 1; // return 1
        }

        return this.leaves(node.left) + this.leaves(node.right); // return the number of leaves in the left subtree + the number of leaves in the right subtree
    }

    // nodes - returns the number of nodes in the tree
    nodes(node) {
        return this.size(node) - this.leaves(node); // return the size of the tree - the number of leaves in the tree
    }

    // balance - returns the balance of the tree
    balance(node) {
        return this.height(node.left) - this.height(node.right); // return the height of the left subtree - the height of the right subtree
    }

    // is full - returns true if the tree is full, false otherwise
    isFull(node) {
        if (this.leaf(node)) { // if the node is a leaf
            return true; // return true
        }

        if (!node.left || !node.right) { // if the node's left or right property is null
            return false; // return false
        }

        return this.isFull(node.left) && this.isFull(node.right); // return true if the left subtree is full and the right subtree is full, false otherwise
    }

    // is perfect - returns true if the tree is perfect, false otherwise
    isPerfect(node) {
        if (this.isFull(node)) { // if the tree is full
            if (this.height(node) === Math.log2(this.size(node)) + 1) { // if the height of the tree is equal to log base 2 of the size of the tree + 1
                return true; // return true
            }
        }

        return false; // return false
    }

    // siblings - returns true if the nodes are siblings, false otherwise
    siblings(node1, node2) {
        if (node1.parent === node2.parent) { // if the nodes have the same parent
            return true; // return true
        }

        return false; // return false
    }

    // uncle - returns true if the nodes have the same uncle, false otherwise
    uncle(node1, node2) {
        if (node1.parent.parent === node2.parent.parent) { // if the nodes have the same grandparent
            return true; // return true
        }

        return false; // return false
    }

    // lowest common ancestor - returns the lowest common ancestor of the nodes
    lowestCommonAncestor(node1, node2) {
        let currentNode = this.root; // create a current node variable and set it to the root of the tree

        while (currentNode) { // loop until the current node is null
            if (node1.value < currentNode.value && node2.value < currentNode.value) { // if the nodes' values are less than the current node's value
                currentNode = currentNode.left; // set the current node to the current node's left property
            } else if (node1.value > currentNode.value && node2.value > currentNode.value) { // if the nodes' values are greater than the current node's value
                currentNode = currentNode.right; // set the current node to the current node's right property
            } else {
                return currentNode; // return the current node
            }
        }
    }

    // level order traversal - visits the nodes in level order
    levelOrderTraversal(node) {
        let queue = new Queue(); // create a queue
        queue.enqueue(node); // enqueue the node

        while (!queue.isEmpty()) { // loop until the queue is empty
            let currentNode = queue.dequeue(); // dequeue the node
            console.log(currentNode.value); // print the node's value

            if (currentNode.left) { // if the node has a left child
                queue.enqueue(currentNode.left); // enqueue the left child
            }

            if (currentNode.right) { // if the node has a right child
                queue.enqueue(currentNode.right); // enqueue the right child
            }
        }
    }

    // is complete - returns true if the tree is complete, false otherwise
    isComplete(node) {
        let queue = new Queue(); // create a queue
        queue.enqueue(node); // enqueue the node

        while (!queue.isEmpty()) { // loop until the queue is empty
            let currentNode = queue.dequeue(); // dequeue the node

            if (currentNode.left) { // if the node has a left child
                queue.enqueue(currentNode.left); // enqueue the left child
            } else if (currentNode.right) { // if the node has a right child
                return false; // return false
            }

            if (currentNode.right) { // if the node has a right child
                queue.enqueue(currentNode.right); // enqueue the right child
            }
        }

        return true; // return true
    }

    // rotate left - rotates the tree left
    rotateLeft(node) {
        let temp = node.right; // create a temp variable and set it to the node's right child
        node.right = temp.left; // set the node's right child to the temp's left child
        temp.left = node; // set the temp's left child to the node
        return temp; // return the temp
    }

    // rotate right - rotates the tree right
    rotateRight(node) {
        let temp = node.left; // create a temp variable and set it to the node's left child
        node.left = temp.right; // set the node's left child to the temp's right child
        temp.right = node; // set the temp's right child to the node
        return temp; // return the temp
    }

    // is BST - returns true if the tree is a BST, false otherwise
    isBST(node) {
        if (!node) { // if the node is null
            return true; // return true
        }

        if (node.left && node.left.value > node.value) { // if the node has a left child and the left child's value is greater than the node's value
            return false; // return false
        }

        if (node.right && node.right.value < node.value) { // if the node has a right child and the right child's value is less than the node's value
            return false; // return false
        }

        return this.isBST(node.left) && this.isBST(node.right); // return true if the left subtree is a BST and the right subtree is a BST, false otherwise
    }

    // BST insert - inserts a node into the BST
    BSTInsert(node, value) {
        if (!node) { // if the node is null
            return new Node(value); // return a new node with the value
        }

        if (value < node.value) { // if the value is less than the node's value
            node.left = this.BSTInsert(node.left, value); // set the node's left child to the result of calling the BST insert function with the node's left child and the value
        } else {
            node.right = this.BSTInsert(node.right, value); // set the node's right child to the result of calling the BST insert function with the node's right child and the value
        }

        return node; // return the node
    }

    // BST array to BST - converts an array to a BST
    BSTArrayToBST(array) {
        for (let i = 0; i < array.length; i++) { // loop through the array
            this.root = this.BSTInsert(this.root, array[i]); // set the root to the result of calling the BST insert function with the root and the current element in the array
        }

        return this.root; // return the root
    }

    // BST search - searches for a value in the BST
    BSTSearch(node, value) {
        if (!node) { // if the node is null
            return false; // return false
        }

        if (value === node.value) { // if the value is equal to the node's value
            return true; // return true
        }

        if (value < node.value) { // if the value is less than the node's value
            return this.BSTSearch(node.left, value); // return the result of calling the BST search function with the node's left child and the value
        } else {
            return this.BSTSearch(node.right, value); // return the result of calling the BST search function with the node's right child and the value
        }
    }

    // BST delete - deletes a node from the BST
    BSTDelete(node, value) {
        if (!node) { // if the node is null
            return null; // return null
        }

        if (value < node.value) { // if the value is less than the node's value
            node.left = this.BSTDelete(node.left, value); // set the node's left child to the result of calling the BST delete function with the node's left child and the value
        } else if (value > node.value) { // if the value is greater than the node's value
            node.right = this.BSTDelete(node.right, value); // set the node's right child to the result of calling the BST delete function with the node's right child and the value
        } else {
            if (!node.left && !node.right) { // if the node has no children
                node = null; // set the node to null
            } else if (!node.left) { // if the node has no left child
                node = node.right; // set the node to the node's right child
            } else if (!node.right) { // if the node has no right child
                node = node.left; // set the node to the node's left child
            } else {
                let temp = this.findMin(node.right); // create a temp variable and set it to the result of calling the find min function with the node's right child
                node.value = temp.value; // set the node's value to the temp's value
                node.right = this.BSTDelete(node.right, temp.value); // set the node's right child to the result of calling the BST delete function with the node's right child and the temp's value
            }
        }

        return node; // return the node
    }

    // big O of BST - returns the big O of the BST
    bigOBST(node) {
        if (!node) { // if the node is null
            return 0; // return 0
        }

        return 1 + this.bigOBST(node.left) + this.bigOBST(node.right); // return 1 + the result of calling the big O of BST function with the node's left child and the result of calling the big O of BST function with the node's right child
    }

    // is AVL - returns true if the tree is an AVL, false otherwise
    isAVL(node) {
        if (!node) { // if the node is null
            return true; // return true
        }

        if (Math.abs(this.height(node.left) - this.height(node.right)) > 1) { // if the absolute value of the height of the node's left child minus the height of the node's right child is greater than 1
            return false; // return false
        }

        return this.isAVL(node.left) && this.isAVL(node.right); // return true if the left subtree is an AVL and the right subtree is an AVL, false otherwise
    }

    // AVL insert - inserts a node into the AVL
    AVLInsert(node, value) {
        if (!node) { // if the node is null
            return new Node(value); // return a new node with the value
        }

        if (value < node.value) { // if the value is less than the node's value
            node.left = this.AVLInsert(node.left, value); // set the node's left child to the result of calling the AVL insert function with the node's left child and the value
        } else {
            node.right = this.AVLInsert(node.right, value); // set the node's right child to the result of calling the AVL insert function with the node's right child and the value
        }

        let balance = this.getBalance(node); // create a balance variable and set it to the result of calling the get balance function with the node

        if (balance > 1 && value < node.left.value) { // if the balance is greater than 1 and the value is less than the node's left child's value
            return this.rotateRight(node); // return the result of calling the rotate right function with the node
        }

        if (balance < -1 && value > node.right.value) { // if the balance is less than -1 and the value is greater than the node's right child's value
            return this.rotateLeft(node); // return the result of calling the rotate left function with the node
        }

        if (balance > 1 && value > node.left.value) { // if the balance is greater than 1 and the value is greater than the node's left child's value
            node.left = this.rotateLeft(node.left); // set the node's left child to the result of calling the rotate left function with the node's left child
            return this.rotateRight(node); // return the result of calling the rotate right function with the node
        }

        if (balance < -1 && value < node.right.value) { // if the balance is less than -1 and the value is less than the node's right child's value
            node.right = this.rotateRight(node.right); // set the node's right child to the result of calling the rotate right function with the node's right child
            return this.rotateLeft(node); // return the result of calling the rotate left function with the node
        }

        return node; // return the node
    }

    // AVL array to AVL - converts an array to an AVL
    AVLArrayToAVL(array) {
        for (let i = 0; i < array.length; i++) { // for each element in the array
            this.root = this.AVLInsert(this.root, array[i]); // set the root to the result of calling the AVL insert function with the root and the current element in the array
        }

        return this.root; // return the root
    }

    // AVL search - searches the AVL for a value
    AVLSearch(node, value) {
        if (!node) { // if the node is null
            return false; // return false
        }

        if (value === node.value) { // if the value is equal to the node's value
            return true; // return true
        }

        if (value < node.value) { // if the value is less than the node's value
            return this.AVLSearch(node.left, value); // return the result of calling the AVL search function with the node's left child and the value
        } else {
            return this.AVLSearch(node.right, value); // return the result of calling the AVL search function with the node's right child and the value
        }
    }

    // AVL delete - deletes a node from the AVL
    AVLDelete(node, value) {
        if (!node) { // if the node is null
            return node; // return the node
        }

        if (value < node.value) { // if the value is less than the node's value
            node.left = this.AVLDelete(node.left, value); // set the node's left child to the result of calling the AVL delete function with the node's left child and the value
        } else if (value > node.value) { // if the value is greater than the node's value
            node.right = this.AVLDelete(node.right, value); // set the node's right child to the result of calling the AVL delete function with the node's right child and the value
        } else {
            if (!node.left && !node.right) { // if the node has no children
                node = null; // set the node to null
            } else if (!node.left) { // if the node has no left child
                node = node.right; // set the node to the node's right child
            } else if (!node.right) { // if the node has no right child
                node = node.left; // set the node to the node's left child
            } else {
                let temp = this.findMin(node.right); // create a temp variable and set it to the result of calling the find min function with the node's right child
                node.value = temp.value; // set the node's value to the temp's value
                node.right = this.AVLDelete(node.right, temp.value); // set the node's right child to the result of calling the AVL delete function with the node's right child and the temp's value
            }
        }

        if (!node) { // if the node is null
            return node; // return the node
        }

        let balance = this.getBalance(node); // create a balance variable and set it to the result of calling the get balance function with the node

        if (balance > 1 && this.getBalance(node.left) >= 0) { // if the balance is greater than 1 and the result of calling the get balance function with the node's left child is greater than or equal to 0
            return this.rotateRight(node); // return the result of calling the rotate right function with the node
        }

        if (balance < -1 && this.getBalance(node.right) <= 0) { // if the balance is less than -1 and the result of calling the get balance function with the node's right child is less than or equal to 0
            return this.rotateLeft(node); // return the result of calling the rotate left function with the node
        }
    }

    // AVL - From sorted array
    AVLFromSortedArray(array, start, end) {
        if (start > end) { // if the start is greater than the end
            return null; // return null
        }

        let mid = Math.floor((start + end) / 2); // create a mid variable and set it to the result of calling the floor function with the result of adding the start and the end and dividing it by 2
        let node = new Node(array[mid]); // create a node variable and set it to a new node with the current element in the array
        node.left = this.AVLFromSortedArray(array, start, mid - 1); // set the node's left child to the result of calling the AVL from sorted array function with the array, the start, and the mid - 1
        node.right = this.AVLFromSortedArray(array, mid + 1, end); // set the node's right child to the result of calling the AVL from sorted array function with the array, the mid + 1, and the end
        return node; // return the node
    }

    // delete - deletes a node with the given value from the tree
    delete(value) {
        if (!this.root) { // if the tree is empty
            return false; // return false
        }

        let currentNode = this.root; // create a current node variable and set it to the root of the tree
        let parentNode = null; // create a parent node variable and set it to null

        while (currentNode) { // loop while the current node is not null
            if (value < currentNode.value) { // if the value is less than the current node's value
                parentNode = currentNode; // set the parent node to the current node
                currentNode = currentNode.left; // set the current node to the current node's left property
            } else if (value > currentNode.value) { // if the value is greater than the current node's value
                parentNode = currentNode; // set the parent node to the current node
                currentNode = currentNode.right; // set the current node to the current node's right property
            } else {
                if (currentNode.left === null && currentNode.right === null) { // if the current node has no children
                    if (parentNode === null) { // if the parent node is null
                        this.root = null; // set the root of the tree to null
                    } else {
                        if (parentNode.left === currentNode) { // if the parent node's left property is the current node
                            parentNode.left = null; // set the parent node's left property to null
                        } else if (parentNode.right === currentNode) { // if the parent node's right property is the current node
                            parentNode.right = null; // set the parent node's right property to null
                        }
                    }
                } else if (currentNode.left === null) { // if the current node has no left child
                    if (parentNode === null) { // if the parent node is null
                        this.root = currentNode.right; // set the root of the tree to the current node's right property
                    } else {
                        if (parentNode.left === currentNode) { // if the parent node's left property is the current node
                            parentNode.left = currentNode.right; // set the parent node's left property to the current node's right property
                        } else if (parentNode.right === currentNode) { // if the parent node's right property is the current node
                            parentNode.right = currentNode.right; // set the parent node's right property to the current node's right property
    }

    // search - searches the tree for a node with the given value
    search(value) {
        if (!this.root) { // if the tree is empty
            return false; // return false
        }

        let currentNode = this.root; // create a current node variable and set it to the root of the tree

        while (currentNode) { // loop while the current node is not null
            if (value < currentNode.value) { // if the value is less than the current node's value
                currentNode = currentNode.left; // set the current node to the current node's left property
            } else if (value > currentNode.value) { // if the value is greater than the current node's value
                currentNode = currentNode.right; // set the current node to the current node's right property
            } else {
                return currentNode; // return the current node
            }
        }

        return false; // return false
    }
}

const tree = new BinarySearchTree(); // create a new tree