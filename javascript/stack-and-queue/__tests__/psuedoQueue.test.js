'use strict';

const PseudoQueue = require('../pseudoQueue');
let pseudoQueue = new PseudoQueue();

describe('pseudoQueue', () => {

  test('can instantiate an empty pseudoQueue', () => {
    expect(pseudoQueue).toBeTruthy();
    expect(pseudoQueue.isEmpty).toBeTruthy();
  });

  test('can enqueue a single value', () => {
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.front.value).toEqual(1);
  });

  test('can enqueue multiple values', () => {
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.front.value).toEqual(1);
    expect(pseudoQueue.front.next.value).toEqual(2);
    expect(pseudoQueue.front.next.next.value).toEqual(3);

  });

  test('can peek at the top Node value', () => {
    expect(pseudoQueue.peek().value).toEqual(1);
  });

  test('can dequeue a single value', () => {
    expect(pseudoQueue.dequeue().value).toEqual(1);
  });

  test('can empty after multiple dequeues', () => {
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.isEmpty).toBeTruthy();
  });

  test('raises an exception when calling dequeue or peek on empty stack', () => {
    expect(() => {
      pseudoQueue.peek();
    }).toThrow();
  });

});

