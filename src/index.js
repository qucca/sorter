class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    return this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
   let arr = [];
   indices.sort().forEach(i => arr.push(this.array[i]));
   arr.sort(this.comparator);
   indices.forEach((i, j) => this.array[i] = arr[j])
  }

  setComparator(compareFunction) {
    return this.comparator = compareFunction;
  }
}

module.exports = Sorter;