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
    while (current) {
      let valueStr = `{ ${current.value} } -> `;
      string = string + valueStr;
      current = current.next;
    }
    string = string + 'NULL';
    return string;
  }

  // appends value at the end of the LinkedList
  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // inserts a value before the first matching targetValue
  insertBefore(targetValue, value) {
    let node = new Node(value);

    let current = this.head;
    if (current.value === targetValue) {
      node.next = current;
      this.head = node;
    } else {
      while(current) {
        if (current.next.value === targetValue) {
          node.next = current.next;
          current.next = node;
          return;
        } else {
          current = current.next;
        }
      }
    }
  }

  // inserts a value after the first matching targetValue
  insertAfter(targetValue, value) {
    let node = new Node(value);
    let current = this.head;
    while(current) {
      if (current.value === targetValue) {
        node.next = current.next;
        current.next = node;
        return;
      } else {
        current = current.next;
      }
    }
  }
}

module.exports = LinkedList;
