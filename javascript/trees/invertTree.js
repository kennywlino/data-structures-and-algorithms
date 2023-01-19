'use strict';

function invertTree(tree) {
  if (!tree.root) return tree;

  const dfs = (node) => {
    if (!node) return;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    dfs(node.left);
    dfs(node.right);
  };

  dfs(tree.root);
  return tree;
}


module.exports = invertTree;
