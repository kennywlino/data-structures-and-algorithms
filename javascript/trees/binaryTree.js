'use strict';

let Node = require('./node');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrderTraversal() {
    let traversedValues = [];

    const traverse = node => {
      traversedValues.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if(node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return traversedValues;
  }

  inOrderTraversal() {
    let traversedValues = [];
    const traverse = node => {

      if (node.left) {
        traverse(node.left);
      }

      traversedValues.push(node.value);

      if(node.right) {
        traverse(node.right);
      }

    };

    traverse(this.root);

    return traversedValues;
  }

  postOrderTraversal() {
    let traversedValues = [];

    const traverse = node => {

      if (node.left) {
        traverse(node.left);
      }

      if(node.right) {
        traverse(node.right);
      }

      traversedValues.push(node.value);
    };

    traverse(this.root);
    return traversedValues;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const traverse = node => {
      if (!node) {
        this.root = new Node(value);
      } else if (value < node.value) {
        if (node.left) {
          traverse(node.left);
        } else {
          node.left = new Node(value);
        }
      } else if (value > node.value) {
        if (node.right) {
          traverse(node.right);
        } else {
          node.right = new Node(value);
        }
      } else {
        return false;
      }
    };

    traverse(this.root);
  }

  contains(value) {
    let containsBool = false;
    const traverse = node => {
      if (value === node.value) {
        containsBool = true;
      } else if (value < node.value && node.left) {
        traverse(node.left);
      } else if (value > node.value && node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return containsBool;
  }
}

module.exports = { BinaryTree, BinarySearchTree };
