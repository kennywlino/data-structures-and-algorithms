'use strict';

const LinkedList = require('../index');
const findCycleLength = require('../findCycleLength');

describe('find cycle length', () => {

  test('returns the length of the loop if there is a loop', () => {
    let list = new LinkedList();
    list.append(1);
    let twoNode = list.append(2);
    list.append(3);
    list.append(4);
    let fiveNode = list.append(5);
    fiveNode.next = twoNode;
    expect(findCycleLength(list)).toEqual(4);
  });

  test('returns 0 if there is not a loop', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(findCycleLength(list)).toEqual(0);
  });

});
