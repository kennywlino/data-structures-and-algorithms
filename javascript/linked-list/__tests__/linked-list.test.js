'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

// linkedList should look like 0, 3, 777, 2, 1, 99, 4, 5, 6, 7 at the end
describe('Linked List', () => {
  let list = new LinkedList();
  test('instantiates an empty list', () => {
    expect(list).toBeTruthy();
  });

  test('insert a node', () => {
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });

  test('head points to the first node', () => {
    expect(list.head.value).toEqual(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
  });

  test('insert multiple nodes', () => {
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  test('returns true when it finds a value that exists', () => {
    expect(list.includes(2)).toBeTruthy();
  });

  test('returns false when searching for a value that does not exist', () => {
    expect(list.includes('2')).not.toBeTruthy();
  });

  test('returns a collection of all the values', () => {
    expect(list.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });

  test('appends a node to the end', () => {
    list.append(4);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    expect(list.head.next.next.next.value).toEqual(4);
  });

  test('appends multiple nodes to the end', () => {
    list.append(5);
    list.append(6);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.value).toEqual(6);
  });

  test('inserts a new value before the first occurrence of a target value located in the middle', () => {
    list.insertBefore(2, 777);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(777);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
    expect(list.head.next.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.next.value).toEqual(6);
  });

  test('inserts a new value before the first occurrence of a target value located at the head', () => {
    list.insertBefore(3, 0);
    expect(list.head.value).toEqual(0);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(777);
    expect(list.head.next.next.next.value).toEqual(2);
    expect(list.head.next.next.next.next.value).toEqual(1);
    expect(list.head.next.next.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.next.next.value).toEqual(6);
  });

  test('inserts a new value after the first occurrence of a target value located in the middle', () => {
    list.insertAfter(1, 99);
    expect(list.head.value).toEqual(0);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(777);
    expect(list.head.next.next.next.value).toEqual(2);
    expect(list.head.next.next.next.next.value).toEqual(1);
    expect(list.head.next.next.next.next.next.value).toEqual(99);
    expect(list.head.next.next.next.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.next.next.next.value).toEqual(6);
  });

  test('inserts a new value after the first occurrence of a target value located at the end', () => {
    list.insertAfter(6, 7);
    expect(list.head.value).toEqual(0);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(777);
    expect(list.head.next.next.next.value).toEqual(2);
    expect(list.head.next.next.next.next.value).toEqual(1);
    expect(list.head.next.next.next.next.next.value).toEqual(99);
    expect(list.head.next.next.next.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.next.next.next.value).toEqual(6);
    expect(list.head.next.next.next.next.next.next.next.next.next.value).toEqual(7);
  });

  test('kthFromEnd works when k value is valid', () => {
    expect(list.kthFromEnd(4)).toEqual(99);
  });

  // LL: 0, 3, 777, 2, 1, 99, 4, 5, 6, 7
  // len: 10
  test('kthFromEnd fails when k value is greater than the length of the list', () => {
    expect(() => {
      list.kthFromEnd(20);
    }).toThrow();
  });

  test('kthFromEnd fails when k value is negative', () => {
    expect(() => {
      list.kthFromEnd(-5);
    }).toThrow();
  });

  // LL: 100
  // len: 1
  test('kthFromEnd fails when linked list is of size 1 and k is 1', () => {
    list.head = null;
    list.insert(100);
    console.log(list.head);
    expect(() => {
      list.kthFromEnd(1);
    }).toThrow();
  });
});
