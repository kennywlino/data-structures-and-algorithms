'use strict';

const Node = require('./node');
const { BinaryTree, BinarySearchTree } = require('./binaryTree');

describe('Binary Tree/Binary Search Tree', () => {
  it('binary tree can instantiate empty tree', () => {
    let tree = new BinaryTree();
    expect(tree).toBeTruthy();
  });

  it('binary tree instantiates tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    expect(tree).toBeTruthy();
  });

  it('BST adds a left and right child', () => {
    let bst = new BinarySearchTree();
    bst.root = new Node(8);
    bst.root.left = new Node(4);
    bst.root.right = new Node(12);
    expect(bst.root.value).toEqual(8);
    expect(bst.root.left.value).toEqual(4);
    expect(bst.root.right.value).toEqual(12);
  });

  it('binary tree returns a collection from pre-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.preOrderTraversal()).toEqual([1, 2, 4, 5, 3, 6]);
  });

  it('binary tree returns a collection from in-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.inOrderTraversal()).toEqual([4, 2, 5, 1, 3, 6]);
  });

  it('binary tree returns a collection from post-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.postOrderTraversal()).toEqual([4, 5, 2, 6, 3, 1]);
  });
  it('binary returns a collection from breadth-first traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('bst returns true when tree contains a value', () => {
    let bst = new BinarySearchTree();
    bst.add(3);
    bst.add(2);
    bst.add(1);
    bst.add(4);
    bst.add(5);
    expect(bst.contains(5)).toBeTruthy();
  });

  it('max value returns the correct value', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.maxValue()).toEqual(6);
  });
  it('max value returns the correct value with floats', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1.5);
    tree.root.left = new Node(2.1);
    tree.root.right = new Node(3.3);
    tree.root.left.left = new Node(4.5);
    tree.root.left.right = new Node(5.6);
    tree.root.right.right = new Node(6.8);
    expect(tree.maxValue()).toEqual(6.8);
  });
  it('max value returns the correct value with negative values', () => {
    let tree = new BinaryTree();
    tree.root = new Node(-1);
    tree.root.left = new Node(-5);
    tree.root.right = new Node(-2);
    tree.root.left.left = new Node(-3);
    tree.root.left.right = new Node(-4);
    tree.root.right.right = new Node(-10);
    expect(tree.maxValue()).toEqual(-1);
  });
});
