class JumpSearch {
    constructor(value, size, array) {
        this.value = value;
        this.size = size;
        this.array = array;
    }

    search() {
        let step = Math.floor(Math.sqrt(this.size)); // step size
        let prev = 0; // previous index

        while (this.array[Math.min(step, this.size) - 1] < this.value) { // while the current element is less than the value
            prev = step; // set the previous index to the current index
            step += Math.floor(Math.sqrt(this.size)); // increment the current index by the step size

            if (prev >= this.size) { // if the previous index is greater than or equal to the size of the array
                return -1; // return -1 if the element is not found
            }
        }

        while (this.array[prev] < this.value) { // while the current element is less than the value
            prev++; // increment the previous index

            if (prev === Math.min(step, this.size)) { // if the previous index is equal to the current index
                return -1; // return -1 if the element is not found
            }
        }

        if (this.array[prev] === this.value) { // if the current element is equal to the value
            return prev; // return the index of the element
        }

        return -1; // return -1 if the element is not found
    }
}

const jumpSearchObject = new JumpSearch(3, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(jumpSearchObject.search()); // print the index of the element
