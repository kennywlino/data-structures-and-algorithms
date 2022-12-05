'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

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
});
