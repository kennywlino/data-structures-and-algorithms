'use strict';

let Node = require('./node');
let Stack = require('./stack');

class PseudoQueue {
  constructor() {
    this.front = null;
    this.back = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    if (!this.front) {
      this.stack1.push(value);
      this.front = this.stack1.peek();
      this.back = this.stack1.peek();
    } else {
      while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
      this.stack1.push(value);
      this.back.next = this.stack1.peek();
      this.back = this.stack1.peek();
      while(!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
      }
    }
  }

  dequeue() {
    if(!this.stack1.isEmpty()) {
      let oldFront = this.front;
      this.front = oldFront.next;
      oldFront.next = null;
      this.stack1.pop();
      return(oldFront);
    } else {
      throw new Error('Queue is empty.');
    }
  }

  peek() {
    if(this.front) {
      return this.front;
    } else {
      throw new Error('Queue is empty.');
    }
  }

  isEmpty() {
    return this.front === null;
  }
}


module.exports = PseudoQueue;
