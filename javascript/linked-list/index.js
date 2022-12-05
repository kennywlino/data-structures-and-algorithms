'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // inserts value at the head of LinkedList
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // checks for value in all nodes of LinkedList
  // returns boolean
  includes(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  // return a string representation of the values in the LinkedList
  toString() {
    let current = this.head;
    let string = '';
    while (current.next) {
      let valueStr = `{ ${current.value} } -> `;
      string = string + valueStr;
    }
    string = string + 'NULL';
    return string;
  }
}

module.exports = LinkedList;
