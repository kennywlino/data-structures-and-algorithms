'use strict';

const Node = require('./node');
const { BinaryTree } = require('./binaryTree');
const isSumTree = require('./isSumTree');

describe('is sum tree', () => {
  it('returns true when a tree is a sum tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(26);
    tree.root.left = new Node(10);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(6);
    tree.root.right.right = new Node(3);
    expect(isSumTree(tree)).toBeTruthy();
  });

  it('returns false when a tree is not a sum tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(10);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(6);
    tree.root.right.right = new Node(3);
    expect(isSumTree(tree)).toBeFalsy();
  });
});
