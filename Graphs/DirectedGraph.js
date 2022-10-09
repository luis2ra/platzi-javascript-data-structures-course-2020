class Graph {
    constructor() {
        this.nodes = 0; // set the number of nodes in the graph to 0
        this.adjacencyList = {}; // create an object to store the adjacency list
    }

    // addVertex - adds a vertex to the graph
    addVertex(node) {
        this.adjacencyList[node] = []; // add a key to the adjacency list with the name of the node and set its value to be an empty array
        this.nodes++; // increment the number of nodes in the graph
    }

    // addEdge - adds an edge between two vertices of the graph
    addEdge(node1, node2) {
        // undirected Graph
        this.adjacencyList[node1].push(node2); // find in the adjacency list the key of node1 and push node2 to the array
        this.adjacencyList[node2].push(node1); // find in the adjacency list the key of node2 and push node1 to the array
    }

    // showConnections - prints all the vertices and its connections
    showConnections() {
        const allNodes = Object.keys(this.adjacencyList); // create an array of all the nodes in the adjacency list

        for (let node of allNodes) { // iterate through all the nodes
            let nodeConnections = this.adjacencyList[node]; // create a variable to store all the connections of the node
            let connections = ""; // create a variable to store the connections
            let vertex; // create a variable to store the vertex

            for (vertex of nodeConnections) { // iterate through all the connections of the node
                connections += vertex + " "; // add the connection to the connections variable
            }

            console.log(node + "-->" + connections); // print the node and its connections
        }
    }

    // breadthFirstSearch - searches the graph using the breadth first search algorithm
    breadthFirstSearch(startingNode) {
        const result = []; // create an array to store the result
        const visited = {}; // create an object to store the visited nodes
        const queue = [startingNode]; // create a queue and add the starting node to it

        visited[startingNode] = true; // set the starting node as visited

        while (queue.length > 0) { // while the queue is not empty
            const currentNode = queue.shift(); // remove the first element of the queue and store it in a variable
            result.push(currentNode); // add the current node to the result

            this.adjacencyList[currentNode].forEach(neighbor => { // iterate through all the neighbors of the current node
                if (!visited[neighbor]) { // if the neighbor is not visited
                    visited[neighbor] = true; // set the neighbor as visited
                    queue.push(neighbor); // add the neighbor to the queue
                }
            });
        }

        return result; // return the result
    }

    // depthFirstSearchRecursive - searches the graph using the depth first search algorithm recursively
    depthFirstSearchRecursive(startingNode) {
        const result = []; // create an array to store the result
        const visited = {}; // create an object to store the visited nodes

        const traverse = (node) => { // create a helper function to traverse the graph
            if (!node) { // if the node is null
                return null; // return null
            }

            visited[node] = true; // set the node as visited
            result.push(node); // add the node to the result

            this.adjacencyList[node].forEach(neighbor => { // iterate through all the neighbors of the node
                if (!visited[neighbor]) { // if the neighbor is not visited
                    return traverse(neighbor); // traverse the neighbor
                }
            });
        };

        traverse(startingNode); // call the helper function

        return result; // return the result
    }

    traverse(startingNode) {
        const result = []; // create an array to store the result
        const visited = {}; // create an object to store the visited nodes
        const stack = [startingNode]; // create a stack and add the starting node to it

        visited[startingNode] = true; // set the starting node as visited

        while (stack.length > 0) { // while the stack is not empty
            const currentNode = stack.pop(); // remove the last element of the stack and store it in a variable
            result.push(currentNode); // add the current node to the result

            this.adjacencyList[currentNode].forEach(neighbor => { // iterate through all the neighbors of the current node
                if (!visited[neighbor]) { // if the neighbor is not visited
                    visited[neighbor] = true; // set the neighbor as visited
                    stack.push(neighbor); // add the neighbor to the stack
                }
            });
        }

        return result; // return the result
    }

    // search - searches the graph using the depth first search algorithm recursively
    search(startingNode) {
        const result = []; // create an array to store the result
        const visited = {}; // create an object to store the visited nodes

        const traverse = (node) => { // create a helper function to traverse the graph
            if (!node) { // if the node is null
                return null; // return null
            }

            visited[node] = true; // set the node as visited
            result.push(node); // add the node to the result

            this.adjacencyList[node].forEach(neighbor => { // iterate through all the neighbors of the node
                if (!visited[neighbor]) { // if the neighbor is not visited
                    return traverse(neighbor); // traverse the neighbor
                }
            });
        };

        traverse(startingNode); // call the helper function

        return result; // return the result
    }

    // insert - inserts a node in the graph
    insert(node) {
        if (!this.adjacencyList[node]) { // if the node is not in the adjacency list
            this.addVertex(node); // add the node to the graph
        }

        return this; // return the graph
    }

    // delete - deletes a node from the graph
    delete(node) {
        while (this.adjacencyList[node].length) { // while the node has neighbors
            const adjacentNode = this.adjacencyList[node].pop(); // remove the last neighbor of the node and store it in a variable
            this.removeEdge(node, adjacentNode); // remove the edge between the node and its neighbor
        }

        delete this.adjacencyList[node]; // delete the node from the adjacency list
    }
}

const myGraph = new Graph(); // create a new graph