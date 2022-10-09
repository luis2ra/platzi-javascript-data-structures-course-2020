class HashTable {
    constructor(size) {
        this.data = new Array(size); // create array of size
    }

    // _hash() method to hash key
    hashMethod(key) {
        let hash = 0; // initialize hash

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; // hash key using prime number
        }

        return hash; // return hash of key
    }

    // set() method to set key-value pair
    set(key, value) {
        const address = this.hashMethod(key); // get address

        if (!this.data[address]) { // if address is empty
            this.data[address] = []; // initialize array
        }

        this.data[address].push([key, value]); // add key-value pair to address in hash table
        return this.data; // return hash table with key-value pair
    }

    // get() method to get value at key
    get(key) {
        const address = this.hashMethod(key); // get address of key
        const currentBucket = this.data[address]; // get bucket at address

        if (currentBucket) { // if bucket exists
            for (let i = 0; i < currentBucket.length; i++) { // iterate through bucket
                if (currentBucket[i][0] === key) { // if key matches
                    return currentBucket[i][1]; // return value at key
                }
            }
        }

        return undefined; // return undefined if key does not exist
    }

    // keys() method to get all keys
    keys() {
        const keysArray = []; // initialize array

        for (let i = 0; i < this.data.length; i++) { // iterate through hash table
            if (this.data[i]) { // if bucket exists
                keysArray.push(this.data[i][0][0]); // add key to array
            }
        }

        return keysArray; // return array
    }

    // values() method to get all values
    values() {
        const valuesArray = []; // initialize array

        for (let i = 0; i < this.data.length; i++) { // iterate through hash table
            if (this.data[i] && !valuesArray.includes(this.data[i][0][1])) { // if bucket exists and value is not in array
                valuesArray.push(this.data[i][0][1]); // add value to array
            }
        }

        return valuesArray; // return array of values
    }

    // delete() method to delete key-value pair
    delete(key) {
        const address = this.hashMethod(key); // get address
        const currentBucket = this.data[address]; // get bucket at address

        if (currentBucket) { // if bucket exists
            for (let i = 0; i < currentBucket.length; i++) { // iterate through bucket
                if (currentBucket[i][0] === key) { // if key matches
                    const deleted = currentBucket.splice(i, 1); // delete key-value pair
                    return deleted; // return deleted key-value pair
                }
            }
        }

        return undefined; // return undefined if key does not exist
    }

    // search() method to search for key
    search(key) {
        const address = this.hashMethod(key); // get address
        const currentBucket = this.data[address]; // get bucket at address

        if (currentBucket) { // if bucket exists
            for (let i = 0; i < currentBucket.length; i++) { // iterate through bucket
                if (currentBucket[i][0] === key) { // if key matches
                    return true; // return true
                }
            }
        }

        return false; // return false if key does not exist
    }

    // print() method to print hash table
    print() {
        console.log(this.data); // print hash table to console
    }
}

const myHashTable = new HashTable(50); // create new hash table of size 50