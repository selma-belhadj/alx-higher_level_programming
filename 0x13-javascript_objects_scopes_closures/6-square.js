#!/usr/bin/node
const BaseSquare = require('./5-square');

module.exports = class Square extends BaseSquare {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      let output = '';
      for (let i = 0; i < this.width; i++) {
        output += c;
      }
      for (let i = 0; i < this.height; i++) {
        console.log(output);
      }
    }
  }
};
