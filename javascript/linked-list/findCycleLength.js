'use strict';

function findCycleLength(list) {
  let slow = list.head;
  let fast = list.head;

  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let temp = slow;
      let length = 1;
      while(temp.next !== slow) {
        length = length + 1;
        temp = temp.next;
      }
      return length;
    }
  }
  return 0;
}

module.exports = findCycleLength;
