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

  // finds the node's value that is k places from the tail
  kthFromEnd(k) {
    if (k < 0) {
      throw new RangeError('k is out of range');
    }

    let current = this.head;
    let indexCounter = 0;

    // finding the last index
    while (current.next) {
      current = current.next;
      indexCounter = indexCounter + 1;

    }

    // reset the current pointer to the beginning
    current = this.head;
    let kIndex = indexCounter - k;
    let currentIndex = 0;

    if (kIndex < 0) {
      throw new RangeError('k is out of range');
    }

    // only loop until the kIndex
    while (currentIndex < kIndex) {
      current = current.next;
      currentIndex += 1;

    }
    return current.value;
  }

  zipLists(list1, list2){
    let list1cur = list1.head;
    let list2cur = list2.head;
    if(list1cur === null){return list2;}
    if(list2cur === null){return list1;}
    let list3 = new LinkedList();
    while(list1cur && list2cur){
      list3.add(list1cur.value);
      list3.add(list2cur.value);
      list1cur = list1cur.next;
      list2cur = list2cur.next;
    }
    while(list1cur){
      list3.add(list1cur.value);
      list1cur = list1cur.next;
    }
    while(list2cur){
      list3.add(list2cur.value);
      list2cur = list2cur.next;
    }
    return list3;
  }
}

module.exports = LinkedList;
