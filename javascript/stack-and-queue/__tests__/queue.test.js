'use strict';

const Queue = require('../queue');
let queue = new Queue();

describe('Queue', () => {

  test('can instantiate an empty queue', () => {
    expect(queue).toBeTruthy();
    expect(queue.isEmpty).toBeTruthy();
  });

  test('can enqueue a single value', () => {
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  test('can enqueue multiple values', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);

  });

  test('can peek at the top Node value', () => {
    expect(queue.peek()).toEqual(1);
  });

  test('can dequeue a single value', () => {
    expect(queue.dequeue()).toEqual(1);
  });

  test('can empty after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty).toBeTruthy();
  });

  test('raises an exception when calling dequeue or peek on empty stack', () => {
    expect(() => {
      queue.peek();
    }).toThrow();
  });

});

