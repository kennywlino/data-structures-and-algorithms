'use strict';

const Node = require('./node');
const { BinaryTree } = require('./binaryTree');
const invertTree = require('./invertTree');


describe('inverted tree', () => {
  it('returns the inverted tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(4);
    tree.root.left = new Node(2);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(9);

    let invertedTree = invertTree(tree);

    expect(invertedTree.root.value).toEqual(4);
    expect(invertedTree.root.left.value).toEqual(7);
    expect(invertedTree.root.right.value).toEqual(2);
    expect(invertedTree.root.left.left.value).toEqual(9);
    expect(invertedTree.root.left.right.value).toEqual(6);
    expect(invertedTree.root.right.left.value).toEqual(3);
    expect(invertedTree.root.right.right.value).toEqual(1);
  });
});
