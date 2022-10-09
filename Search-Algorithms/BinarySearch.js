class BinarySearch {
    constructor() {
        this.value = 0; // value to search for
        this.size = 0; // size of the array
        this.array = []; // array of integers
    }

    search() {
        let left = 0; // left index
        let right = this.size - 1; // right index

        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // middle index

            if (this.array[mid] === this.value) { // if the middle element is equal to the value
                return mid; // return the index of the element
            } else if (this.array[mid] < this.value) { // if the middle element is less than the value
                left = mid + 1; // set the left index to the middle index plus 1
            } else {
                right = mid - 1; // set the right index to the middle index minus 1
            }
        }

        return -1; // return -1 if the element is not found
    }
}

const binarySearchObject = new BinarySearch();
binarySearchObject.value = 7;
binarySearchObject.size = 10;
binarySearchObject.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearchObject.search()); // print the index of the element
