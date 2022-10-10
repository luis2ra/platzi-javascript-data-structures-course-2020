class ExponentialSearch {
    constructor (value, size, array) {
        this.value = value;
        this.size = size;
        this.array = array;
    }

    search () {
        let bound = 1;

        while (bound < this.size && this.array[bound] < this.value) {
            bound *= 2;
        }

        let left = bound / 2;
        let right = Math.min(bound, this.size - 1);

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (this.array[mid] === this.value) {
                return mid;
            } else if (this.array[mid] < this.value) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}

const exponentialSearchObject = new ExponentialSearch(9, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(exponentialSearchObject.search());
