'use strict';

const Node = require('./node');
const { BinaryTree, BinarySearchTree } = require('./binaryTree');

describe('Binary Tree/Binary Search Tree', () => {
  it('binary tree can instantiate empty tree', () => {
    let tree = new BinaryTree();
    expect(tree).toBeTruthy();
  });

  it('binary tree can instantiate tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    expect(tree).toBeTruthy();
  });

  it('BST can add a left and right child', () => {
    let bst = new BinarySearchTree();
    bst.root = new Node(8);
    bst.root.left = new Node(4);
    bst.root.right = new Node(12);
    expect(bst.root.value).toEqual(8);
    expect(bst.root.left.value).toEqual(4);
    expect(bst.root.right.value).toEqual(12);
  });

  it('binary tree can return a collection from pre-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.preOrderTraversal()).toEqual([1, 2, 4, 5, 3, 6]);
  });

  it('binary tree can return a collection from in-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.inOrderTraversal()).toEqual([4, 2, 5, 1, 3, 6]);
  });

  it('binary tree can return a collection from post-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    expect(tree.postOrderTraversal()).toEqual([4, 5, 2, 6, 3, 1]);
  });

  it('bst returns true when tree contains a value', () => {
    let bst = new BinarySearchTree();
    bst.add(3);
    bst.add(3);
    bst.add(3);
    bst.add(3);
    bst.add(3);
    expect(bst.contains(3)).toBeTruthy();
  });
});
