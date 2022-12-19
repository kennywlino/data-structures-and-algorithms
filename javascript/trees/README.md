# Trees

In this lab, we implement our own Tree and Binary Search Tree structures.

## Challenge

In CLASS-15, we implement the Tree and Binary Search Tree classes along with a Node class. We also include basic methods.

## Approach & Efficiency

### Binary Tree

- traversals - O(n) -- We have to go through each node n.

### Binary Search Tree

- `add` - O(h) -- we may have to search from the root to the leaves which is equal to the height (h) of the tree.
- `contains` - O(h)

## API

### Binary Tree

- preOrderTraversal
- inOrderTraversal
- postOrderTraversal

### Binary Search Tree

Extends Binary Tree with these added functions.

- `add` -- adds a new node in the correct location in the BST
- `contains`
