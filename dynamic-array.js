class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0

    // Your code here

  }

  read(index) {
    return this.data[index]
    // Your code here
  }

  unshift(val) {

    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val
    this.length += 1
    // Your code here
  }

}







module.exports = DynamicArray;
