class linearSearch {
    constructor(value, size, array) {
        this.value = value;
        this.size = size;
        this.array = array;
    }

    // search - searches for an element in an array
    search() {
        for (let i = 0; i < this.size; i++) { // iterate through the array
            if (this.array[i] === this.value) { // if the current element is equal to the value
                return i; // return the index of the element
            }
        }

        return -1; // return -1 if the element is not found
    }
}

// create a new linear search object
const linearSearchObject = new linearSearch(7, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(linearSearchObject.search()); // print the index of the element