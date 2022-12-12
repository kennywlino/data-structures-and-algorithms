'use strict';

const Stack = require('../stack');

let stack = new Stack();

describe('Stack', () => {
  test('can instantiate an empty stack', () => {
    expect(stack).toBeTruthy();
    expect(stack.isEmpty).toBeTruthy();
  });

  test('can push a single value', () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  // after this test stack is:
  // TOP: 3
  //      2
  //      1
  test('can push multiple values', () => {
    expect(stack.top.value).toEqual(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  // after this test stack is:
  // TOP: 2
  //      1
  test('can pop off a single value', () => {
    expect(stack.pop()).toEqual(3);
  });

  test('can peek at the top Node value', () => {
    expect(stack.peek()).toEqual(2);
  });

  // after this test stack is:
  // EMPTY
  test('can empty after multiple pops', () => {
    stack.pop();
    stack.pop();
    expect(stack.isEmpty).toBeTruthy();
  });

  test('raises an exception when calling pop or peek on empty stack', () => {
    expect(() => {
      stack.peek();
    }).toThrow();
  });

});
