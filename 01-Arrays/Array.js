class MyArray {
    constructor() {
        this.length = 0; // length of array
        this.data = {}; // empty object
    }

    // get() method to retrieve item at index
    get(index) {
        return this.data[index]; // indices start at 0
    }

    // push() method to add item to end of array
    push(item) {
        this.data[this.length] = item; // add item to end of array
        this.length++; // increment length

        return this.length; // return new length
    }

    // pop() method to remove item from end of array
    pop() {
        const lastItem = this.data[this.length - 1]; // get last item to return
        delete this.data[this.length - 1]; // delete last item
        this.length--; // decrement length

        return lastItem; // return last item
    }

    // shift() method to remove item from beginning of array
    shift() {
        const firstItem = this.data[0]; // get first item
        this.delete(this.data[0]); // delete first item
        this.length--; // decrement length

        return firstItem; // return first item
    }

    // shiftIndex() method to shift indices to left
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]; // shift index to left
        }

        delete this.data[this.length - 1]; // delete last item
    }

    // delete() method to remove item at index
    delete(index) {
        const item = this.data[index]; // get item at index
        this.shiftIndex(index); // shift indices to left

        return item; // return item
    }

    // unshift() method to add item to beginning of array
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]; // shift items to right
        }

        this.data[0] = item; // add item to beginning of array
        this.length++; // increment length

        return this.length; // return new length
    }

    // insert() method to insert item at index
    insert(index, item) {
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1]; // shift items to right
        }

        this.data[index] = item; // add item at index
        this.length++; // increment length

        return this.length; // return new length
    }

    // reverse() method to reverse array
    reverse() {
        for (let i = 0; i < this.length / 2; i++) {
            const temp = this.data[i]; // get item at index
            this.data[i] = this.data[this.length - 1 - i]; // swap items
            this.data[this.length - 1 - i] = temp; // swap items
        }

        return this.data; // return reversed array
    }

    // print() method to print array
    print() {
        console.log(this.data); // print array
    }
}

// create new array to testing
const myArray = new MyArray();
