class FibonacciSearch {
    constructor(value, size, array) {
        this.value = value;
        this.size = size;
        this.array = array;
    }

    search() {
        let fibMMm2 = 0; // (m-2)'th Fibonacci No.
        let fibMMm1 = 1; // (m-1)'th Fibonacci No.
        let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

        while (fibM < this.size) {
            fibMMm2 = fibMMm1;
            fibMMm1 = fibM;
            fibM = fibMMm2 + fibMMm1;
        }

        let offset = -1;

        while (fibM > 1) {
            let i = Math.min(offset + fibMMm2, this.size - 1);

            if (this.array[i] < this.value) {
                fibM = fibMMm1;
                fibMMm1 = fibMMm2;
                fibMMm2 = fibM - fibMMm1;
                offset = i;
            } else if (this.array[i] > this.value) {
                fibM = fibMMm2;
                fibMMm1 = fibMMm1 - fibMMm2;
                fibMMm2 = fibM - fibMMm1;
            } else {
                return i;
            }
        }

        if (fibMMm1 && this.array[offset + 1] === this.value) {
            return offset + 1;
        }

        return -1;
    }
}

const fibonacciSearchObject = new FibonacciSearch(9, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(fibonacciSearchObject.search());
