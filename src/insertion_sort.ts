class InsertionSort {
  array = [];

  constructor(unsortedArray) {
    this.array = unsortedArray;
  }

  sortAscending() {
    for (var j = 1; j < this.array.length; j++) {
      var key = this.array[j];
      var i = j - 1;
      while (i > -1 && this.array[i] > key) {
        this.array[i + 1] = this.array[i];
        i--;
      }
      this.array[i + 1] = key;
    }
    return this.array;
  }

  sortDescending() {
    for (var j = 1; j < this.array.length; j++) {
      var key = this.array[j];
      var i = j - 1;
      while (i > -1 && this.array[i] < key) {
        this.array[i + 1] = this.array[i];
        i--;
      }
      this.array[i + 1] = key;
    }
    return this.array;
  }
}

export { InsertionSort };
