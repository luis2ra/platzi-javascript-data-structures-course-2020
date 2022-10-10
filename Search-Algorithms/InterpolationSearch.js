class InterpolationSearch {
    constructor(value, size, array) {
        this.value = value;
        this.size = size;
        this.array = array;
    }

    search() {
        let low = 0; // low index
        let high = this.size - 1; // high index

        while (low <= high && this.value >= this.array[low] && this.value <= this.array[high]) {
            let pos = Math.floor(low + ((this.value - this.array[low]) * (high - low) / (this.array[high] - this.array[low]))); // position of the value

            if (this.array[pos] === this.value) { // if the current element is equal to the value
                return pos; // return the index of the element
            } else if (this.array[pos] < this.value) { // if the current element is less than the value
                low = pos + 1; // set the low index to the current index plus 1
            } else {
                high = pos - 1; // set the high index to the current index minus 1
            }
        }

        return -1; // return -1 if the element is not found
    }
}

const interpolationSearchObject = new InterpolationSearch(5, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(interpolationSearchObject.search()); // print the index of the element
