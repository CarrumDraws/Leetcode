export class HashTable {
  constructor(size) {
    // Table Array of length 10
    this.table = new Array(size);
    this.size = size;
  }

  // Hash Function: Converts Key(String) -> Random Index
  // `_` makes function private
  _hash(key) {
    let total = 0;
    for (let index in key) {
      total += key.charCodeAt(index);
    }
    return total % this.size;
  }

  // Set Value in HashTable
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      // Index is empty
      this.table[index] = [[key, value]];
    } else {
      // Index contains array

      // If key exists, replace value
      let foundExistingKey = this.table[index].find((ele) => ele[0] == key);
      if (foundExistingKey) {
        foundExistingKey[1] == value;
      } else {
        // else, add new element
        this.table[index].push([key, value]);
      }
    }
  }

  // Return Value
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      const foundValue = this.table[index].find((ele) => ele[0] == key);
      if (foundValue) {
        return foundValue[1];
      }
    }
    return -1;
  }

  // Remove Element from Array whose key matches the key.
  remove(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      this.table[index].forEach((ele, i) => {
        if (ele[0] == key) {
          this.table[index].splice(i, 1);
        }
      });
    }
  }

  print() {
    console.log("-------------------");
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          console.log(
            "Index " +
              i +
              " has key " +
              this.table[i][j][0] +
              " and value " +
              this.table[i][j][1]
          );
        }
      }
    }
  }
}

// Hashtables store two types of data: Key, and Value.
// By using our main data as a Key, we can "check" if the value exists in O(1) time instead of O(n).
// If our main data is a String, we can use a Hashing Function to convert the string into an integer to be stored.
// Therefore, Javascript Objects (With int keys) can be used as Hashtables.
