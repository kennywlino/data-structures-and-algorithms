# Stack and Queue

In this lab, we implement our own Stack, Queue and Node class from scratch.

## Challenge

The purpose of this challenge is to practice implementing the Stack and Queue data structures and also to practice writing tests for our code.

We also add a PseudoQueue class created by utilizing two Stacks to maintain the state of the Queue.

We also add an AnimalShelter class that allows us to specify a specific animal to enqueue and a specific animal preference to dequeue and return the first instance.

In Class-13, we write a `validateBrackets()` function to validate whether all brackets have been closed in a string.

## API

### Stack

The Stack class contains the following functions:

- `push()` -- adds a new Node with that value to the top of the stack
- `pop()` -- returns the value of the Node from the top of the stack and removes it
- `peek()` -- returns the value of the node located at the top of the stack *without* removing it
- `isEmpty()` -- returns a Boolean indicating whether or not the stack is empty.

### Queue

The Queue class contains the following functions:

- `enqueue()` -- adds a new Node with that value to the back of the queue
- `dequeue()` -- returns the value from the Node from the front of the queue and removes it
- `peek()` -- returns the value of the Node located at the front of the queue *without* removing it
- `isEmpty()` -- returns a Boolean indicating whether or not the queue is empty.

### PseudoQueue

Same functions as Queue.

### AnimalShelter

Same functions as Queue.

### validateBrackets

- `validateBrackets(str)` -- takes in a string containing brackets `[`, `(`, `{` and returns a boolean based on whether all are closed or not

## Approach & Efficiency

Here are the Big O time complexities for the above functions:

### Stack

- `push()` -- O(1)
- `pop()` -- O(1)
- `peek()` -- O(1)
- `isEmpty()` -- O(1)

### Queue

- `enqueue()` -- O(1)
- `dequeue()` -- O(1)
- `peek()` -- O(1)
- `isEmpty()` -- O(1)

### PseudoQueue

- `enqueue()` -- O(n) -- since we have to move all elements from stack1 to stack2
- `dequeue()` -- O(1) -- it's still just a pop()
- `peek()` -- O(1)
- `isEmpty()` -- O(1)

### AnimalShelter

- `enqueue(animal)` -- O(1) -- just adding to the back
- `dequeue(pref)` -- O(n) -- have to walkthrough all elements to find preference

### validateBrackets

- `validateBrackets(str)` -- O(n) -- have to walkthrough some/all characters

## Whiteboards

### CLASS-11: PseudoQueue

- ![PseudoQueue](./assets/CLASS-11_%20stack-queue-pseudo.jpeg)

### CLASS-12: AnimalShelter

- ![AnimalShelter](./assets/CLASS-12_%20stack-queue-animal-shelter.jpeg)

### CLASS-13: validateBrackets

- ![validateBrackets](./assets/CLASS-13_stack-queue-brackets.jpeg)
