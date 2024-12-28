/**
 * Graphs
 * 
 *   2 - 0
 *  / \
 * 1 - 3
 * 
 */


// Edge List
const graph = [
    [0, 2], // 0
    [2, 3], // 1
    [2, 1], // 2
    [1, 3]  // 3
]

// Adjacency List
const graph1 = [
    [2],        // 0
    [2, 3],     // 1
    [0, 1, 3],  // 2
    [1, 2]      // 3
]

// Object o Hash Table
const graph2 = {
    0: [2],         // 0
    1: [2, 3],      // 1
    2: [0, 1, 3],   // 2
    3: [1, 2]       // 3
}

// Adjacency Matrix
const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

// Object o Hash Table
const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}
