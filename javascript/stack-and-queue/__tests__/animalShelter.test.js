'use strict';

const AnimalShelter = require('../animalShelter');
let animalShelter = new AnimalShelter();

describe('animalShelter', () => {

  test('can instantiate an empty animalShelter', () => {
    expect(animalShelter).toBeTruthy();
    expect(animalShelter.isEmpty).toBeTruthy();
  });

  // Current state: 'dog'
  test('can enqueue a single animal', () => {
    animalShelter.enqueue('dog');
    expect(animalShelter.front.value).toEqual('dog');
  });

  // Current state: 'dog', 'dog', 'cat'
  test('can enqueue multiple animals', () => {
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.front.value).toEqual('dog');
    expect(animalShelter.front.next.value).toEqual('dog');
    expect(animalShelter.front.next.next.value).toEqual('cat');

  });

  // After dequeue: 'dog', 'cat'
  test('can dequeue a single animal at the front of the queue', () => {
    expect(animalShelter.dequeue('dog').value).toEqual('dog');
  });

  // Current state: 'dog'
  test('can dequeue a single animal at the end of the queue', () => {
    expect(animalShelter.dequeue('cat').value).toEqual('cat');
  });

  // after enqueue: 'dog', 'cat', 'dog'
  // after dequeue: 'dog', 'dog'
  test('can dequeue a single animal in the middle of the queue', () => {
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });

  // after dequeue: null
  test('can empty after multiple dequeues', () => {
    animalShelter.dequeue('dog');
    animalShelter.dequeue('dog');
    expect(animalShelter.isEmpty).toBeTruthy();
  });

  test('returns null when calling dequeue with animal not in shelter', () => {
    expect(animalShelter.dequeue('dog')).toEqual(null);
  });

});

