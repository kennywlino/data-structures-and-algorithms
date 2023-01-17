'use strict';

function isSumTree(node) {
  const sum = (node) => {
    if (!node) return 0;
    return sum(node.left) + node.value + sum(node.right);
  };

  if (!node) return true;
  if (!node.left && !node.right) return true;

  let leftSum = sum(node.left);
  let rightSum = sum(node.right);

  if (node.value !== leftSum + rightSum) return false;

  return isSumTree(node.left) && isSumTree(node.right);
}

module.exports = isSumTree;
