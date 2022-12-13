'use strict';

let Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  // adds a new Node with value to the top
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  // removes and returns the Node value at the top
  pop() {
    if(!this.isEmpty()) {
      let oldTop = this.top;
      this.top = oldTop.next;
      oldTop.next = null;
      return oldTop;
    } else {
      throw new Error('Stack is empty.');
    }
  }

  // returns the value of the top Node
  peek() {
    if(!this.isEmpty()) {
      return this.top;
    } else {
      throw new Error('Stack is empty.');
    }
  }

  // returns whether the Stack is empty
  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
